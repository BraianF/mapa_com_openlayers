function carregaMapa(latitudeAtual, longitudeAtual){

	var baseMapLayer = new ol.layer.Tile({
		source: new ol.source.OSM()
	});

	var map = new ol.Map({
		target : 'mapa',
		layers: [ baseMapLayer
		],
		view: new ol.View({
			center: ol.proj.fromLonLat([longitudeAtual, latitudeAtual]), // Coordenadas do IF
			zoom: 14 //Zoom inicial
		})
	});


	var localAtual = new ol.Feature({
		geometry: new ol.geom.Point(
			ol.proj.fromLonLat([longitudeAtual, latitudeAtual]), // Coordenadas da ilha
		),
		name: "Ilha das Cabras"
	});
	
	localAtual.setStyle(new ol.style.Style({
		image: new ol.style.Icon(({
			// color: '#ffcd46',
			anchor: [0.5, 0.5],
			crossOrigin: 'anonymous',
			src: 'img/images/marker-icon.png',
			size : [50, 82],
			scale : 0.8
		}))
	}));

	var vectorSource = new ol.source.Vector({
		features: [ifcCamboriu, ilhaDasCabras, localAtual]
	});
	
	var markerVectorLayer = new ol.layer.Vector({
		source: vectorSource,
	});
	
	var poligono = new ol.source.Vector({
		features: (new ol.format.GeoJSON()).readFeatures(areaIfCamboriu)
	});

	var layer = new ol.layer.Vector({
		source: poligono,
		style: estiloAreaIfCamboriu
	});

	map.addLayer(markerVectorLayer);
	map.addLayer(layer);







	var styles = [
		new ol.style.Style({
			stroke: new ol.style.Stroke({
				color: 'blue',
				width: 3
			}),
			fill: new ol.style.Fill({
				color: 'rgba(0, 0, 255, 0.1)'
			})
		}),
		new ol.style.Style({
			image: new ol.style.Circle({
				radius: 5,
				fill: new ol.style.Fill({
					color: 'orange'
				})
			}),
			geometry: function(feature) {
				// return the coordinates of the first ring of the polygon
				var coordinates = feature.getGeometry().getCoordinates()[0];
				return new ol.geom.MultiPoint(coordinates);
			}
		})
	];
	
	
	



}