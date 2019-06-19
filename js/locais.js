var ifcCamboriu = new ol.Feature({
	geometry: new ol.geom.Point(
		ol.proj.fromLonLat([-48.658646, -27.015599]), // Coordenadas do IF
	),
	name: "IFC - Camboriu"
});

ifcCamboriu.setStyle(new ol.style.Style({
	image: new ol.style.Icon(({
		// color: '#ffcd46',
		anchor: [0.5, 0.5],
		crossOrigin: 'anonymous',
		src: 'img/images/logo-ifc.png',
		size : [300, 402],
		scale : 0.1
	}))
}));

var ilhaDasCabras = new ol.Feature({
	geometry: new ol.geom.Point(
		ol.proj.fromLonLat([-48.6250532, -26.9865415]), // Coordenadas da ilha
	),
	name: "Ilha das Cabras"
});

ilhaDasCabras.setStyle(new ol.style.Style({
	image: new ol.style.Icon(({
		// color: '#ffcd46',
		anchor: [0.5, 0.5],
		crossOrigin: 'anonymous',
		src: 'img/images/beach.png',
		size : [512, 512],
		scale : 0.1
	}))
}));

// var areaIf = [
// 	[-48.653123, -27.017385],
// 	[-48.653555, -27.017672],
// 	[-48.654667, -27.017985],
// 	[-48.655662, -27.018669],
// 	[-48.657090, -27.019163],
// 	[-48.658957, -27.019646],
// 	[-48.659664, -27.019805],
// 	[-48.661536, -27.019700],
// 	[-48.662014, -27.019611],
// 	[-48.662267, -27.019153],
// 	[-48.664849, -27.016244],
// 	[-48.665838, -27.016710],
// 	[-48.668399, -27.013339],
// 	[-48.665039, -27.009535],
// 	[-48.662370, -27.008092],
// 	[-48.653123, -27.017385]
// ];
// var areaIfCamboriu = new ol.Feature({
// 	geometry : new ol.geom.Polygon([areaIf])
	
// }); 

var areaIfCamboriu = {
	"type": "FeatureCollection",
	"features": [
	  {
		"type": "Feature",
		"properties": {},
		"geometry": {
		  "type": "Polygon",
		  "coordinates": [
			[
				//As coordenadas tem que ser em EPSG:3857 (normalmente é EPSG:4326)
				[-5416014.9102,-3125576.96898],
				[-5416688.51151,-3124743.32764],
				[-5417082.63994,-3124272.76219],
				[-5417715.63408,-3124803.04407],
				[-5417703.6908,-3124927.25424],
				[-5417665.47228,-3125025.18918],
				[-5417596.20123,-3125082.51695],
				[-5417660.69497,-3125127.90144],
				[-5417065.91934,-3125844.49858],
				[-5417039.64411,-3125923.32427],
				[-5416753.00526,-3125935.26755],
				[-5416377.98609,-3125825.38932],
				[-5416248.9986,-3125734.62035],
				[-5416158.22963,-3125689.23587],
				[-5416069.84932,-3125667.73795],
				[-5416014.9102,-3125576.96898]
			]
		  ]
		}
	  }
	],
	projection: 'EPSG:3857'
	
  };

var estiloAreaIfCamboriu = [
	new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: 'blue',
			width: 3
		}),
		fill: new ol.style.Fill({
			color: 'rgba(0, 0, 255, 0.1)'
		})
	})
];
