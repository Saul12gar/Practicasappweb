var map = L.map('map').setView([21.88234, -102.28259], 13); // Coordenadas de Aguascalientes
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: '© OpenStreetMap'
}).addTo(map);


var iconoags = L.icon({
    iconUrl: 'ags.png', 
    iconSize: [38, 50], 
    iconAnchor: [19, 50], 
    popupAnchor: [0, -50] 
});
var marker = L.marker([21.88234, -102.28259],{ icon: iconoags }).addTo(map);
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.").openPopup();


var iconoplaza = L.icon({
    iconUrl: 'plaza.png', 
    iconSize: [38, 50], 
    iconAnchor: [19, 50], 
    popupAnchor: [0, -50] 
});
var plazaPatria = L.marker([21.88187, -102.29495],{ icon: iconoplaza }).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");

var iconomuseo = L.icon({
    iconUrl: 'museo.png', 
    iconSize: [38, 50], 
    iconAnchor: [19, 50], 
    popupAnchor: [0, -50] 
});
var museoMuerte = L.marker([21.88417, -102.28878],{ icon: iconomuseo }).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");

var feriaSanMarcos = L.circle([21.87888, -102.29727], {
    color: 'green',
    fillColor: '#0f3',
    fillOpacity: 0.5,
    radius: 300
   }).addTo(map);
   feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes");
   
   var centroHistorico = L.polygon([
    [21.8821, -102.2935],
    [21.8829, -102.2865],
    [21.8797, -102.2860],
    [21.8792, -102.2920]
   ]).addTo(map);
   centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");

   var baseMaps = {
    "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
   };
   var overlayMaps = {
    "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte]),
    "Feria de San Marcos": feriaSanMarcos,
    "Centro Histórico": centroHistorico
   };
   L.control.layers(baseMaps, overlayMaps).addTo(map);


