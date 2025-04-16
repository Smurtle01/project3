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

// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Picture Slider Logic (Banket Page)
  const sliderImages = [
    "images/banket1.jpeg",
    "images/banket2.jpg",
    "images/banket3.jpg"
  ];

  let currentSlide = 0;
  const sliderImg = document.querySelector(".slider-image");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");

  function updateSlide(index) {
    if (sliderImg) {
      sliderImg.src = sliderImages[index];
    }
  }

  if (sliderImg && prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
      updateSlide(currentSlide);
    });

    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % sliderImages.length;
      updateSlide(currentSlide);
    });

    // Optional autoplay every 5 seconds
    setInterval(() => {
      currentSlide = (currentSlide + 1) % sliderImages.length;
      updateSlide(currentSlide);
    }, 5000);
  }
});