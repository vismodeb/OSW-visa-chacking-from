// SWIPER JS FULL image banner
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  effect: "fade",
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

// language click flag image change
document.addEventListener('DOMContentLoaded', function() {
  var imageSelector = document.getElementById('imageSelector');
  var imageContainer = document.getElementById('imageContainer');
  var images = document.querySelectorAll('#imageContainer img');

  // Set up the event listener for the select element
  imageSelector.addEventListener('change', function() {
  var selectedValue = imageSelector.value;

  // Hide all images
  images.forEach(function(image) {
    image.style.display = 'none';
  });

  // Show the selected image
  var selectedImage = document.getElementById(selectedValue);
  if (selectedImage) {
    selectedImage.style.display = 'block';
  }
  });
});

