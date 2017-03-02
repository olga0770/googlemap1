var map;

function rightClickMap() {
map = new google.maps.event.addListener(map, "rightclick", function(event) {
    var lat = event.latLng.lat();
    var lng = event.latLng.lng();
    // populate yor box/field with lat, lng
    alert("Lat=" + lat + "; Lng=" + lng);
});

}




//var map;
//      function initMap() {
//        map = new google.maps.Map(document.querySelector('#map'), {
//          center: {
//              lat: 55.706387,
//              lng: 12.539127
//          },
//          zoom: 15
//        });
//      }
