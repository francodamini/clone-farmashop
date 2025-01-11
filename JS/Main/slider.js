const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");

let currentIndex;
let slideWidth;
let direction;
let offset;

function iniciar() {
  currentIndex = 0;
  direction = true; //true -> derecha
  offset = 0;
  slideWidth = slides[0].offsetWidth + 8; //8 por el margen derecho
}

function moveSlider() {
  if (direction) {
    currentIndex++;
    offset += slideWidth;
  } else {
    currentIndex--;
    offset -= slideWidth;
  }

  if (currentIndex === 7) {
    direction = false;
  } else if (currentIndex === 0) {
    direction = true;
  }

  sliderContainer.style.transform = `translateX(-${offset}px)`;
}

function resize() {
  iniciar();
  moveSlider();
}

iniciar();
setInterval(moveSlider, 4000);

window.addEventListener("resize", () => resize());
