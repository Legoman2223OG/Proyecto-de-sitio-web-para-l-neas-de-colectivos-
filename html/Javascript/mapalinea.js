var mapalinea = L.map("map2").setView([-36.5814979,-59.9642282], 7)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGVnb21hbjIyMjMiLCJhIjoiY2t1NjZheWVnMDRmNDJvcDc1YWUzeHB2dSJ9.oweUVdo4N33gHM0ee--oDg'
}).addTo(mapalinea);

var iconoparada = L.icon({
    iconUrl: 'parada.png',

    iconSize:     [17, 22], // size of the icon
    iconAnchor:   [10, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -10] // point from which the popup should open relative to the iconAnchor
});

var myStyle = {
    "color": "blue",
    "weight": 5,
    "opacity": 0.65
};
mapalinea.options.maxZoom = 16;
mapalinea.options.minZoom = 12;
mapalinea.touchZoom.disable();
mapalinea.scrollWheelZoom.disable();
mapalinea.keyboard.disable();
mapalinea.doubleClickZoom.disable();