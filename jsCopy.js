$.getJSON("json.json", dataErHentet);


 function dataErHentet(data){

 data.forEach(visInformation);
 }
 function visInformation(sted){

console.log ("vis");
 //3. klon template så der kan indsættes data
 var klon = document.querySelector("#informationmarker").content.cloneNode(true);

 //4. hvilke data skal med?
klon.querySelector(".data_billede").src = "picture/" + sted.billede + "-sted.jpg";
klon.querySelector(".data_navn").innerHTML = sted.navn;
klon.querySelector(".data_adresse").innerHTML = sted.adresse;
klon.querySelector(".data_beskrivelse").innerHTML = sted.beskrivelse;


 //5. tilføj html fra template til DOM
 document.querySelector(".moreinfo").appendChild(klon);

}


function initMap() {
var map = new google.maps.Map(document.querySelector('#map'), {
center: {lat: 55.703790, lng: 12.538337},
scrollwheel: false,
zoom: 16,
});

//map.data.loadGeoJson(
//'https://storage.googleapis.com/mapsdevsite/json/google.json');

//var marker1 = new google.maps.Marker({
//position: {lat: 55.706387, lng: 12.539127},
//map: map,
////icon: 'picture/markerKEAbig.png',
//title: 'KEA, Lygten 16, 2400 København NV',
//animation: google.maps.Animation.DROP
//});

}





function createMarker(sted) {
console.log ("createMarker");

var marker = new google.maps.Marker({
position: sted.position,
map: map,
title: sted.navn,
});
}











//        function initMap() {
//        var myLatLng1 = {lat: 55.706387, lng: 12.539127};
//        var myLatLng2 = {lat: 55.702824, lng: 12.538005};
//        var myLatLng3 = {lat: 55.706275, lng: 12.541474};
//        var myLatLng4 = {lat: 55.704338, lng: 12.537269};
//        var myLatLng5 = {lat: 55.700847, lng: 12.537806};
//
//var map = new google.maps.Map(document.querySelector('#map'), {
//zoom: 15,
//center: myLatLng1
//});
//
//map.data.loadGeoJson(
//'https://storage.googleapis.com/mapsdevsite/json/google.json');
//
//    var marker1 = new google.maps.Marker({
//    draggable: true,
//    animation: google.maps.Animation.DROP,
//    position: myLatLng1,
//    icon: 'picture/markerKEA.png',
//    map: map,
//    title: 'Kea, Lygten 16, 2400 København NV / 55.706387, 12.539127'
//    });
//
//    var marker2 = new google.maps.Marker({
//    position: myLatLng2,
//    map: map,
//    title: 'Nørrebro Bycenter, Lygten 2L, 2400 København NV'
//    });
//
//    var marker3 = new google.maps.Marker({
//    position: myLatLng3,
//    map: map,
//    title: 'Bispebjerg St, 2400 København NV'
//    });
//
//    var marker4 = new google.maps.Marker({
//    position: myLatLng4,
//    map: map,
//    title: 'Fitness World Lygten, Rentemestervej 2, 2400 København NV'
//    });
//
//    var marker5 = new google.maps.Marker({
//    position: myLatLng5,
//    map: map,
//    title: 'Nørrebro St, 2400 København NV'
//    });
//
//
//
//
//
//
//
//
//
//    map.addListener('center_changed', function() {
//    window.setTimeout(function() {
//    map.panTo(marker1.getPosition());
//    }, 3000);
//    });
//
//    marker1.addListener('click', function() {
//    map.setZoom(20);
//    map.setCenter(marker1.getPosition());
//    });
//
//
//
//
//
//    var secretMessages = ['Her kan du shoppe'];
//
//    for (var i = 0; i < secretMessages.length; ++i) {
//    var marker2 = new google.maps.Marker({
//
//    position: myLatLng2,
//    map: map,
//    title: 'Nørrebro Bycenter, Lygten 2L, 2400 København NV'
//    });
//    attachSecretMessage(marker2, secretMessages[i]);
//    }
//
//
//
//// Attaches an info window to a marker with the provided message.
//// When the marker is clicked, the info window will open
//// with the secret message.
//
//    function attachSecretMessage(marker, secretMessage) {
//    var infowindow = new google.maps.InfoWindow({
//    content: secretMessage
//    });
//
//    marker2.addListener('click', function() {
//    infowindow.open(marker2.get('map'), marker2);
//    });
//    }
//
//
//
//
//
//
//
//
//
//
//    var contentString = '<div id="content">'+
//            '<div id="siteNotice">'+
//            '</div>'+
//            '<h1 id="firstHeading" class="firstHeading">Fitness World Lygten</h1>'+
//            '<div id="bodyContent">'+
//            '<p><b>Fitness World Lygten</b>, also referred to as <b>Fitness World Lygten</b>, is a large ' +
//            'sandstone rock formation in the southern part of the '+
//            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
//            'south west of the nearest large town, Alice Springs; 450&#160;km '+
//            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
//            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
//            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
//            'Aboriginal people of the area. It has many springs, waterholes, '+
//            'rock caves and ancient paintings. Uluru is listed as a World '+
//            'Heritage Site.</p>'+
//            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
//            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
//            '(last visited June 22, 2009).</p>'+
//            '</div>'+
//            '</div>';
//
//        var infowindow = new google.maps.InfoWindow({
//          content: contentString
//        });
//
//        var marker4 = new google.maps.Marker({
//          position: myLatLng4,
//          map: map,
//          title: 'Fitness World Lygten, Rentemestervej 2, 2400 København NV'
//        });
//        marker4.addListener('click', function() {
//          infowindow.open(map, marker4);
//        });
//
//
//
//
//
//
//
//
//}








