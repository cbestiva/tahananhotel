function initialize() {
  var myLatlng = new google.maps.LatLng(14.077668, 121.324565);
  var mapOptions = {
    center: myLatlng,
    zoom: 15
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatlng,
    title: "Tahanan ni Aling Meding"
  });

  marker.setMap(map);
}

$(document).on('ready page:load', initialize);