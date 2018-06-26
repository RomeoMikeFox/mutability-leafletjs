// -----------------------------------------------------
//
// This file is so users can modify how the page acts
// without diving to deep in the code.  This way we can
// also try out or hold custom code for ourselves and
// not check it into the repo.
//
// There is a div id'ed as plane_extension for use with
// this javascript file.
// -----------------------------------------------------

function extendedInitialize() {
	// Write your initalization here
	// Gets called just before the 1-sec function call loop is setup
	updateClock();
	updateRunway();
	loadMapData();
}

function extendedPulse() {
	// This will get called every second after all the main functions
	updateClock();
}

function updateClock() {
	var date = new Date();
	var hours = date.getUTCHours().toString().length < 2 ? "0" + date.getUTCHours() : date.getUTCHours();
	var minutes = date.getUTCMinutes().toString().length < 2 ? "0" + date.getUTCMinutes() : date.getUTCMinutes();
	var seconds = date.getUTCSeconds().toString().length < 2 ? "0" + date.getUTCSeconds() : date.getUTCSeconds();
	document.getElementById("utcClock").innerHTML = hours + ":" + minutes + ":" + seconds + " UTC";
}

function updateRunway() {
	var runwayNumber = RunwayInUse < 10 ? '0' + RunwayInUse : RunwayInUse;
	document.getElementById("runway").innerHTML = 'Displayed configuration : <span style="color: #caebee;">Runway ' + runwayNumber + '</span>';
}

function loadMapData() {
	registerNavaidsFixes();
	registerProcedures();

	loadAirspaces();
	loadGeography();
	loadNavdata();
}
