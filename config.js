// --------------------------------------------------------
//
// This file is to configure the configurable settings.
// Load this file before script.js file at gmap.html.
//
// --------------------------------------------------------

// -- Output Settings -------------------------------------
// Show metric values
// This controls the units used in the plane table,
// and whether metric or imperial units are shown first
// in the detailed plane info.
Metric = false; // true or false

// -- Map settings ----------------------------------------
// These settings are overridden by any position information
// provided by dump1090 itself. All positions are in decimal
// degrees.

// Default center of the map.
DefaultCenterLat = 46.253917;
DefaultCenterLon = 6.132222;
// The google maps zoom level, 0 - 16, lower is further out
DefaultZoomLvl = 9;

SiteShow = true; // true to show distances from site
SiteDisplay = false; // true to display site location
SiteLat = 46.332040; // position of the marker
SiteLon = 6.057147;
SiteName = "My Radar Site"; // tooltip of the marker


// -- Marker settings -------------------------------------
// The default marker color
MarkerIcon = 'images/ac_norm.svg';
SelectedIcon = 'images/ac_sel.svg';
StaleIcon = 'images/ac_old.svg';

SiteCircles = false; // true to show circles (only shown if the center marker is shown)
// In nautical miles or km (depending settings value 'Metric')
SiteCirclesDistances = new Array(50, 100, 150, 200);

// Show the clocks at the top of the righthand pane? You can disable the clocks if you want here
ShowClocks = true;

// Controls page title, righthand pane when nothing is selected
PageName = "RMF - 1090MHz Radar";

//Type of aircraft icon
ShowAircraftIcon = true;

// Runway in use
DefaultRunwayInUse = 23;
RunwayInUse = 0;
