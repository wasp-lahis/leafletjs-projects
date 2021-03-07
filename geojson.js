var mymap = L.map('mapid').setView([49.25077560316286, -123.08944702148438], 10);

var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
});

Stamen_Watercolor.addTo(mymap);

var blackIcon = L.icon({		
    iconUrl: 'img/map-marker.svg',
    iconSize:     [32, 37], // put size of the icon
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
});

var popup = L.popup()

var geojson = {"type": "FeatureCollection","features": [{"type": "Feature","properties": {},"geometry": {"type": "Polygon","coordinates": [[[-123.16051483154297,49.25592972045248],[-123.15948486328126,49.24293134862421],[-123.15433502197266,49.22499694405728],[-123.12000274658202,49.22499694405728],[-123.1076431274414,49.23306823189507],[-123.13682556152344,49.24674157076632],[-123.14815521240233,49.257498258029436],[-123.1467819213867,49.26914869098439],[-123.16463470458983,49.27116483284281],[-123.16017150878908,49.25503339088541],[-123.16051483154297,49.25592972045248]]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [-123.08223724365234,49.25167201004459]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [-123.10661315917969,49.26959672962893]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[-123.06884765625,49.241586494141664],[-123.0523681640625,49.251896109221754],[-123.04412841796875,49.23418913980944],[-123.06507110595703,49.22656646440612],[-123.07983398437499,49.2140089056539]]}}]}

L.geoJSON(geojson,{
	style: function(feature){
		return{
			color: '#000',
			weight: 1
		}
	},
	pointToLayer: function(geoJsonPoint,latlng){
		return L.marker(latlng,{
			icon: blackIcon
		});
	},
	onEachFeature: function(feature,layer){
		if (feature.geometry.type ==='Point'){
			layer.bindPopup(feature.geometry.coordinates.join(','))
		}
		else if (feature.geometry.type ==='Polygon'){
			layer.bindPopup('hello, I am Polygon!')
		}
	}
})
.addTo(mymap)