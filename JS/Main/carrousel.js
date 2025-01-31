let currentSlide = 0;

function showSlide(index) {
  const visibleProducts =
    window.innerWidth <= 650 ? 2 : window.innerWidth <= 768 ? 3 : 5;

  if (visibleProducts == 5) {
    // Control del índice para productos individuales
    if (index >= 6) {
      currentSlide = 0; // Reinicia al primer producto si pasa el último
    } else if (index < 0) {
      currentSlide = 5; // Vuelve al último producto si el índice es negativo
    } else {
      currentSlide = index;
    }
  } else if (visibleProducts == 3) {
    if (index >= 8) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = 7;
    } else {
      currentSlide = index;
    }
  } else {
    if (index >= 9) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = 8;
    } else {
      currentSlide = index;
    }
  }

  // Calcula la posición de desplazamiento
  const offset = -currentSlide * (100 / visibleProducts);
  document.querySelector(
    ".carousel-container"
  ).style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Muestro el primer producto al cargar la página
showSlide(currentSlide);

// Detecta cambios de tamaño de pantalla y reinicia el carrusel en la vista correspondiente
window.addEventListener("resize", () => showSlide(currentSlide));
