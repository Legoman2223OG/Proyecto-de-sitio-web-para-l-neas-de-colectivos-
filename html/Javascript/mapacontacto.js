var mapacontacto = L.map("mapacontacto").setView([-34.7872381, -58.255015], 14);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGVnb21hbjIyMjMiLCJhIjoiY2t2cmlwcHlzN2R2NjJucXByZ2o4dmcwayJ9.i1N8sBcyKrBdc1rTd_W6dg'
}).addTo(mapacontacto);
var iconoparada = L.icon({
    iconUrl: 'parada.png',

    iconSize:     [17, 22], // size of the icon
    iconAnchor:   [10, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -10] // point from which the popup should open relative to the iconAnchor
});

L.marker([-34.7872381,-58.255015], {icon: iconoparada}).addTo(mapacontacto).bindPopup("José Manuel de Estrada 1092, B1888FXV Florencio Varela, Provincia de Buenos Aires");