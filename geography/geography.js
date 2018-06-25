var col_lake_stroke = '#b7b7ff';
var col_lake_fill = '#b7b7ff';
var wei_lake_stroke = 0.3;
var opa_lake_stroke = 0.4;
var opa_lake_fill = 0;

function loadGeography() {
	loadLakes();
}

function loadLakes() {
	// Lacs
	var lakes = [];
	var lakesLayerGroup = new L.LayerGroup();
	
	lakes.push(new L.Polygon(lac_leman_paths,{
		color: col_lake_stroke,
		opacity: opa_lake_stroke,
		weight: wei_lake_stroke,
		fillColor: col_lake_fill,
		fillOpacity: opa_lake_fill,
		title: 'Lac Léman'
	}));
	
	lakes.push(new L.Polygon(lac_bourget_paths,{
		color: col_lake_stroke,
		opacity: opa_lake_stroke,
		weight: wei_lake_stroke,
		fillColor: col_lake_fill,
		fillOpacity: opa_lake_fill,
		title: 'Lac du Bourget'
	}));
	
	lakes.push(new L.Polygon(lac_annecy_paths,{
		color: col_lake_stroke,
		opacity: opa_lake_stroke,
		weight: wei_lake_stroke,
		fillColor: col_lake_fill,
		fillOpacity: opa_lake_fill,
		title: 'Lac d\'Annecy'
	}));
	
	lakes.push(new L.Polygon(lac_joux_paths,{
		color: col_lake_stroke,
		opacity: opa_lake_stroke,
		weight: wei_lake_stroke,
		fillColor: col_lake_fill,
		fillOpacity: opa_lake_fill,
		title: 'Lac de Joux'
	}));
	
	lakes.push(new L.Polygon(lac_neuchatel_paths,{
		color: col_lake_stroke,
		opacity: opa_lake_stroke,
		weight: wei_lake_stroke,
		fillColor: col_lake_fill,
		fillOpacity: opa_lake_fill,
		title: 'Lac de Neuchatel'
	}));
	
	lakes.push(new L.Polygon(lac_morat_paths,{
		color: col_lake_stroke,
		opacity: opa_lake_stroke,
		weight: wei_lake_stroke,
		fillColor: col_lake_fill,
		fillOpacity: opa_lake_fill,
		title: 'Lac de Morat'
	}));
	
	lakes.push(new L.Polygon(lac_bienne_paths,{
		color: col_lake_stroke,
		opacity: opa_lake_stroke,
		weight: wei_lake_stroke,
		fillColor: col_lake_fill,
		fillOpacity: opa_lake_fill,
		title: 'Lac de Bienne'
	}));
	
	lakes.push(new L.Polygon(lac_gruyere_paths,{
		color: col_lake_stroke,
		opacity: opa_lake_stroke,
		weight: wei_lake_stroke,
		fillColor: col_lake_fill,
		fillOpacity: opa_lake_fill,
		title: 'Lac de la Gruyère'
	}));
	
	lakes.push(new L.Polygon(lac_schiffenen_paths,{
		color: col_lake_stroke,
		opacity: opa_lake_stroke,
		weight: wei_lake_stroke,
		fillColor: col_lake_fill,
		fillOpacity: opa_lake_fill,
		title: 'Lac Schiffenen'
	}));
	
	for (var i in lakes) {
		lakesLayerGroup.addLayer(lakes[i]);
	}
	lakesLayerGroup.addTo(LeafletMap);
}