 let map;
 
 function initMap() {
  const location = { lat: 41.8320101356961, lng: -87.62724715767193 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });

  // Feature 1: Custom Marker
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "We are here!",
  });

  // Feature 2: Info Window
  const infoWindow = new google.maps.InfoWindow({
    content: "<p>Welcome to our location!</p>",
  });
  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });

  // Feature 3: Circle around location
  new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.2,
    map,
    center: location,
    radius: 2000,
  });
}