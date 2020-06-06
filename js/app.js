// Updated value.
const currentSlide = (n) => showSlides(n);

// show Slide.
const showSlides = (n) => {
  var slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[n - 1].style.display = "flex";
};

// Initialize the default value.
showSlides(1);
