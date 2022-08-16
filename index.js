let slides = document.getElementsByClassName('carousel-item');
let next = document.getElementById('carousel-button-next');
let prev = document.getElementById('carousel-button-prev');

// Position of the carousel used to track the image.
let slidePosition = 0;
let totalSlides = slides.length;

// Changes to the next image
next.addEventListener('click', function () {
  hideSlides();
  slidePosition === totalSlides - 1 ? (slidePosition = 0) : slidePosition++;
  slides[slidePosition].classList.add('carousel-item-visible');
});

// Changes to the previous image
prev.addEventListener('click', function () {
  hideSlides();
  slidePosition === 0 ? (slidePosition = totalSlides - 1) : slidePosition--;
  slides[slidePosition].classList.add('carousel-item-visible');
});

// Sets all the slides to hidden using the DOM
function hideSlides() {
  for (let slide of slides) {
    slide.classList.remove('carousel-item-visible');
    slide.classList.add('carousel-item-hidden');
  }
}
