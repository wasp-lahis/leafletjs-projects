var mymap = L.map('mapid').setView([49.25077560316286, -123.08944702148438], 8);

var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
});

Stamen_Watercolor.addTo(mymap);

var greenIcon = L.icon({
    iconUrl: 'tree.png',
    iconSize:     [32, 37], // put size of the icon
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
});

var blackIcon = L.icon({		
    iconUrl: 'map-marker.svg',
    iconSize:     [32, 37], // put size of the icon
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
});

var popup = L.popup({
	maxWidth:400
})
.setLatLng([49.25077560316286, -123.08944702148438])
.setContent('<img src=https://via.placeholder.com/100x50/>')
// .openOn(mymap);

L.marker([49.25077560316286, -123.08944702148438], {icon: blackIcon}).addTo(mymap)
	.bindPopup(popup)

L.marker([48.25077560316286, -124.08944702148438], {icon: greenIcon}).addTo(mymap)
	.bindPopup("Hi!")

	