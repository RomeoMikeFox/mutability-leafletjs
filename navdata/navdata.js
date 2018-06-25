PointDB = {};
ProcDB = [];

// ------------------------------------------------
//                  ICONS DEFINITION
// ------------------------------------------------
var fix_icon = new L.icon({
	iconUrl: 'images/fix.svg',
	iconSize: [8,8],
	iconAnchor: [4,4]
});

var wpt_icon = new L.icon({
	iconUrl: 'images/wpt.svg',
	iconSize: [8,8],
	iconAnchor: [4,4]
});

var vor_icon = new L.icon({
	iconUrl: 'images/vor.svg',
	iconSize: [8,8],
	iconAnchor: [4,4]
});

var dme_icon = new L.icon({
	iconUrl: 'images/dme.svg',
	iconSize: [8,8],
	iconAnchor: [4,4]
});

var vordme_icon = new L.icon({
	iconUrl: 'images/vordme.svg',
	iconSize: [8,8],
	iconAnchor: [4,4]
});

var ndb_icon = new L.icon({
	iconUrl: 'images/ndb.svg',
	iconSize: [8,8],
	iconAnchor: [4,4]
});

var starLineOptions = {
	dashArray: '10,5',
	color: '#597a56',
	weight: 0.8,
	opacity: 0.7
};

var sidLineOptions = {
	dashArray: '5,5',
	color: '#21c3d6',
	weight: 0.8,
	opacity: 0.3
};

// ------------------------------------------------
//           END OF ICONS DEFINITION
// ------------------------------------------------

function loadNavdata() {
	loadPointsDB();
	loadProcDB();
}

function loadPointsDB() {
	registerNavaidsFixes();
	
	// Load Points (fix, wpt, navaids)
	for(var title in PointDB) { 
		var point = PointDB[title]; 
		
		if(point.runway == 99 || point.runway == RunwayInUse) {
			var marker_icon;
			switch (point.type) {
				case "fix":
				marker_icon = fix_icon;
				break;
				
				case "wpt":
				marker_icon = wpt_icon;
				break;
				
				case "vor":
				marker_icon = vor_icon;
				break;
				
				case "vordme":
				marker_icon = vordme_icon;
				break;
				
				case "ndb":
				marker_icon = ndb_icon;
				break;
				
				default:
				marker_icon = fix_icon;
				break;
			}
			
			new L.marker(point.position,
			{
				icon: marker_icon,
				title: point.title
			}).addTo(LeafletMap);
		}
		
	}
}
	
function loadProcDB() {
	registerProcedures();
		
	// Load Procs (SIDs, STARs)
	for (var i = 0; i < ProcDB.length; ++i) {
		var proc = ProcDB[i];
		
		if (proc.runway == 99 || proc.runway == RunwayInUse) {
			var polyline_options;
			switch (proc.type) {
				case "sid":
				polyline_options = sidLineOptions;
				break;
				
				case "star":
				polyline_options = starLineOptions;
				break;
				
				default:
				polyline_options = sidLineOptions;
				break;
			}
			
			new L.Polyline(proc.path,polyline_options).addTo(LeafletMap);
		}		
	}
}