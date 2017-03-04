var center = {lat: 55.703790, lng: 12.538337};
var map;


function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
center: center,
//scrollwheel: false,
zoom: 16,
});
}

$.getJSON("json.json", buildMap);

function buildMap(JSONdata) {
//debugInfo("Loaded JSONdata");
JSONdata.forEach(createMarker);

positionMarker = new google.maps.Marker({
position: center,
map: map
});
}

function createMarker(sted) {
var marker = new google.maps.Marker({
position: sted.position,
title: sted.navn,
map: map
});



var infowindow = new google.maps.InfoWindow({
content: "overwrite with template",
position: sted.position
});

marker.addListener("click", function () {

var clone = document.querySelector("#informationmarker").content.cloneNode(true);

clone.querySelector(".data_billede").src = "picture/" + sted.billede + "-sted.jpg";
clone.querySelector(".data_navn").textContent = sted.navn;
clone.querySelector(".data_adresse").innerHTML = sted.adresse;
clone.querySelector(".data_beskrivelse").innerHTML = sted.beskrivelse;

infowindow.setContent(clone);
infowindow.open(map, marker);

});
}

