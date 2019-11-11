// Initialize and add the map
export function initMap() {
  // The location of Uluru
  var kc = {lat: 39.0997, lng: -94.5786};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: kc});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: kc, map: map});
}