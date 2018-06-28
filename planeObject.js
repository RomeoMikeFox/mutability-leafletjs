"use strict";

function PlaneObject(icao) {
	// Info about the plane
	this.icao = icao;
	this.flight = null;
	this.squawk = null;
	this.selected = false;

	// Basic location information
	this.altitude = null;
	this.speed = null;
	this.track = null;
	this.position = null;
	this.sitedist = null;

	// Data packet numbers
	this.messages = null;
	this.rssi = null;

	// Track history as a series of line segments
	this.track_linesegs = [];
	this.history_size = 0;

	// When was this last updated (receiver timestamp)
	this.last_message_time = null;
	this.last_position_time = null;

	// When was this last updated (seconds before last update)
	this.seen = null;
	this.seen_pos = null;

	// Display info
	this.visible = true;
	this.marker = null;
	if (ShowAircraftIcon) {
		this.icon = new L.icon({
				iconUrl: 'images/ac_norm.svg',
				iconSize: [16, 16],
				iconAnchor: [8, 8],
				rotationAngle: 0
			});
	} else {
		this.icon = new L.icon({
				iconUrl: 'images/losange.svg',
				iconSize: [20, 20],
				iconAnchor: [10, 10]
			});
	}
}

// Appends data to the running track so we can get a visual tail on the plane
PlaneObject.prototype.updateTrack = function (estimate_time) {
	var here = this.position;
	if (!here)
		return;

	if (this.track_linesegs.length == 0) {
		// Brand new track
		//console.log(this.icao + " new track");
		var newseg = {
			track: [here, here],
			line: null,
			head_update: this.last_position_time,
			tail_update: this.last_position_time,
			estimated: false,
			ground: (this.altitude === "ground")
		};
		this.track_linesegs.push(newseg);
		this.history_size += 2;
		return;
	}

	var lastseg = this.track_linesegs[this.track_linesegs.length - 1];
	var lastpos = lastseg.track[lastseg.track.length - 1];
	var elapsed = (this.last_position_time - lastseg.head_update);

	var new_data = (here !== lastpos);
	var est_track = (elapsed > estimate_time);
	var ground_track = (this.altitude === "ground");

	if (!new_data)
		return false;

	if (est_track) {
		if (!lastseg.estimated) {
			// >5s gap in data, create a new estimated segment
			//console.log(this.icao + " switching to estimated");
			this.track_linesegs.push({
				track: [lastpos, here],
				line: null,
				head_update: this.last_position_time,
				estimated: true
			});
			this.history_size += 2;
			return true;
		}

		// Append to ongoing estimated line
		//console.log(this.icao + " extending estimated (" + lastseg.track.getLength() + ")");
		lastseg.track.push(here);
		lastseg.head_update = this.last_position_time;
		this.history_size++;
		return true;
	}

	if (lastseg.estimated) {
		// We are back to good data.
		//console.log(this.icao + " switching to good track");
		this.track_linesegs.push({
			track: [lastpos, here],
			line: null,
			head_update: this.last_position_time,
			tail_update: this.last_position_time,
			estimated: false,
			ground: (this.altitude === "ground")
		});
		this.history_size += 2;
		return true;
	}

	if ((lastseg.ground && this.altitude !== "ground") ||
		(!lastseg.ground && this.altitude === "ground")) {
		//console.log(this.icao + " ground state changed");
		// Create a new segment as the ground state changed.
		// assume the state changed halfway between the two points
		var midpoint = interpolate(lastpos, here, 0.5);
		lastseg.track.push(midpoint);
		this.track_linesegs.push({
			track: [midpoint, here, here],
			line: null,
			head_update: this.last_position_time,
			tail_update: this.last_position_time,
			estimated: false,
			ground: (this.altitude === "ground")
		});
		this.history_size += 4;
		return true;
	}

	// Add more data to the existing track.
	// We only retain some historical points, at %HistoryStep% second intervals,
	// plus the most recent point
	if (this.last_position_time - lastseg.tail_update >= HistoryStep) {
		// enough time has elapsed; retain the last point and add a new one
		//console.log(this.icao + " retain last point");
		lastseg.track.push(here);
		lastseg.tail_update = lastseg.head_update;
		this.history_size++;
	} else {
		// replace the last point with the current position
		lastseg.track[lastseg.track.length - 1] = here;
	}
	lastseg.head_update = this.last_position_time;
	return true;
};

// This is to remove the line from the screen if we deselect the plane
PlaneObject.prototype.clearLines = function () {
	for (var i = 0; i < this.track_linesegs.length; ++i) {
		var seg = this.track_linesegs[i];
		if (seg.line !== null) {
			seg.line.remove();
			seg.line = null;
		}
	}
};

PlaneObject.prototype.updateIcon = function () {
	var iconUrl = MarkerIcon;

	// If this marker is selected we should make it lighter than the rest.
	if (this.selected)
		iconUrl = SelectedIcon;

	// If we have not seen a recent position update, change color
	if (this.seen_pos > 15)
		iconUrl = StaleIcon;

	// If the squawk code is one of the international emergency codes,
	// match the info window alert color.
	if (this.squawk in SpecialSquawks)
		iconUrl = SpecialSquawks[this.squawk].MarkerIcon;

	var rotation = (this.track === null ? 0 : this.track);

	if (iconUrl === this.icon.iconUrl && rotation === this.marker.options.rotationAngle)
		return false; // no changes

	if (ShowAircraftIcon) {
		this.icon.options.iconUrl = iconUrl;
	}

	if (this.marker) {
		this.marker.setRotationAngle(rotation);
		this.marker.setIcon(this.icon);
	}

	return true;
};

// Update our data
PlaneObject.prototype.updateData = function (receiver_timestamp, data) {
	// Update all of our data
	this.messages = data.messages;
	this.rssi = data.rssi;
	this.last_message_time = receiver_timestamp - data.seen;

	if (typeof data.altitude !== "undefined")
		this.altitude = data.altitude;
	if (typeof data.vert_rate !== "undefined")
		this.vert_rate = data.vert_rate;
	if (typeof data.speed !== "undefined")
		this.speed = data.speed;
	if (typeof data.track !== "undefined")
		this.track = data.track;
	if (typeof data.lat !== "undefined") {
		this.position = new L.latLng(data.lat, data.lon);
		this.last_position_time = receiver_timestamp - data.seen_pos;

		if (SitePosition !== null) {
			this.sitedist = computeDistanceBetween(SitePosition, this.position);
		}
	}
	if (typeof data.flight !== "undefined")
		this.flight = data.flight;
	if (typeof data.squawk !== "undefined")
		this.squawk = data.squawk;
};

PlaneObject.prototype.updateTick = function (receiver_timestamp, last_timestamp) {
	// recompute seen and seen_pos
	this.seen = receiver_timestamp - this.last_message_time;
	this.seen_pos = (this.last_position_time === null ? null : receiver_timestamp - this.last_position_time);

	// If no packet in over 58 seconds, clear the plane.
	if (this.seen > 58) {
		if (this.visible) {
			//console.log("hiding " + this.icao);
			this.clearMarker();
			this.visible = false;
			if (SelectedPlane == this.icao)
				selectPlaneByHex(null, false);
		}
	} else {
		this.visible = true;
		if (this.position !== null) {
			if (this.updateTrack(receiver_timestamp - last_timestamp + 5)) {
				this.updateLines();
				this.updateMarker(true);
			} else {
				this.updateMarker(false); // didn't move
			}
		}
	}
};

PlaneObject.prototype.clearMarker = function () {
	if (this.marker) {
		this.marker.remove();
		this.marker.off();
		this.marker = null;
	}
};

// Update our marker on the map
PlaneObject.prototype.updateMarker = function (moved) {
	if (!this.visible) {
		this.clearMarker();
		return;
	}

	if (this.marker) {
		if (moved)
			this.marker.setLatLng(this.position);
		this.updateIcon();
	} else {
		this.updateIcon();
		this.marker = new L.marker(this.position, {
				icon: this.icon,
				visible: true,
				rotationCenter: 'center center'
			}).addTo(LeafletMap);

		// Trap clicks for this marker.
		this.marker.on('click', selectPlaneByHex.bind(undefined, this.icao, false));
		this.marker.on('dblclick', selectPlaneByHex.bind(undefined, this.icao, true));
	}

	// Setting the marker title
	var title = (this.flight === null || this.flight.length == 0) ? this.icao : (this.flight + ' (' + this.icao + ')');
	if (title !== this.marker.title)
		this.marker.title = title;
};

// Update our marker on the map
PlaneObject.prototype.updateMapMarker = function () {
	if (!this.visible) {
		this.clearMarker();
		return;
	}

	if (this.marker) {
		this.marker.remove();
		this.marker.addTo(LeafletMap);
	}
};

// Update our planes tail line,
PlaneObject.prototype.updateLines = function () {
	if (!this.selected)
		return;

	for (var i = 0; i < this.track_linesegs.length; ++i) {
		var seg = this.track_linesegs[i];
		if (seg.line === null) {
			if (seg.estimated) {
				seg.line = new L.polyline(seg.track, {
						dashArray: '5,5',
						color: '#804040',
						weight: 2
					}).addTo(LeafletMap);
			} else {
				seg.line = new L.polyline(seg.track, {
						color: (seg.ground ? '#408040' : '#000000'),
						weight: 3
					}).addTo(LeafletMap);
			}
		}
	}
	
	// Update the last segment with the new last position
	var last_seg = this.track_linesegs[this.track_linesegs.length - 1];
	last_seg.line.setLatLngs(last_seg.track);
};

PlaneObject.prototype.destroy = function () {
	this.clearLines();
	this.clearMarker();
};
