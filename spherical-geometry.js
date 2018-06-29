EARTH_RADIUS = 6378137

function toDegrees(radians) {
	return radians * 180 / Math.PI;
}

function toRadians(angleDegrees) {
	return angleDegrees * Math.PI / 180.0;
}

function computeDistanceBetween(from, to, radius = EARTH_RADIUS) {
	const radFromLat = toRadians(from.lat),
	radFromLng = toRadians(from.lng);
	const radToLat = toRadians(to.lat),
	radToLng = toRadians(to.lng);
	return 2 * Math.asin(Math.sqrt(
			Math.pow(Math.sin((radFromLat - radToLat) / 2), 2)
			 + Math.cos(radFromLat) * Math.cos(radToLat) *
			Math.pow(Math.sin((radFromLng - radToLng) / 2), 2))) * radius;
}
function interpolate(from, to, fraction) {
	const radFromLat = toRadians(from.lat),
	radFromLng = toRadians(from.lng);
	const radToLat = toRadians(to.lat),
	radToLng = toRadians(to.lng);

	const cosFromLat = Math.cos(radFromLat),
	cosToLat = Math.cos(radToLat);

	const radDist = computeDistanceBetween(from, to);
	const sinRadDist = Math.sin(radDist);

	if (sinRadDist < 1e-6)
		return from;

	const a = Math.sin((1 - fraction) * radDist) / sinRadDist;
	const b = Math.sin(fraction * radDist) / sinRadDist;
	const c = a * cosFromLat * Math.cos(radFromLng)
		 + b * cosToLat * Math.cos(radToLng);
	const d = a * cosFromLat * Math.sin(radFromLng)
		 + b * cosToLat * Math.sin(radToLng);

	return new L.latLng(
		toDegrees(
			Math.atan2(
				a * Math.sin(radFromLat) + b * Math.sin(radToLat),
				Math.sqrt(Math.pow(c, 2) + Math.pow(d, 2)))),
		toDegrees(Math.atan2(d, c)));
}
