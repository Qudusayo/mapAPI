// Get user longitude and latitude
function onPositionUpdate(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  return { lat, lng };
}

// Initialize and add the map
function initMap() {
  // The location of userCurrentPosition
  let myCurrentPosition;
  
  if (navigator.geolocation) {
    myCurrentPosition =
      navigator.geolocation.getCurrentPosition(onPositionUpdate);
  } else {
    return "Geolocation is not available";
  }
  // The map, centered at userCurrentPosition
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: myCurrentPosition,
  });
  // The marker, positioned at userCurrentPosition
  const marker = new google.maps.Marker({
    position: myCurrentPosition,
    map: map,
  });
}

// Mapbox access token
// pk.eyJ1IjoicXVkdXNheW8iLCJhIjoiY2t1NGFsMTEyMWg3OTJydDkxaGJlM214NSJ9.DkNwK8_ip_1mYYrALOzxqg