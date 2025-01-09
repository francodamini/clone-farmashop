let currentSlide = 0;

function showSlide(index) {
  const products = document.querySelectorAll(".carousel .product");
  const totalProducts = products.length;
  const visibleProducts = window.innerWidth < 768 ? 2 : 5; // 2 o 5 productos visibles según el tamaño de la pantalla
  console.log("currentslide antes del if: ", index);
  if (visibleProducts == 5) {
    // Control del índice para productos individuales
    if (index >= 6) {
      currentSlide = 0; // Reinicia al primer producto si pasa el último
    } else if (index < 0) {
      currentSlide = 5; // Vuelve al último producto si el índice es negativo
    } else {
      currentSlide = index;
    }
    // Calcula la posición de desplazamiento
    const offset = -currentSlide * (100 / visibleProducts); // Desplazamiento en porcentaje
    console.log("offset: ", offset);
    document.querySelector(
      ".carousel"
    ).style.transform = `translateX(${offset}%)`;
  } else {
    console.log("entra");
    if (index >= 9) {
      currentSlide = 0; // Reinicia al primer producto si pasa el último
    } else if (index < 0) {
      currentSlide = 8; // Vuelve al último producto si el índice es negativo
    } else {
      currentSlide = index;
    }

    // Calcula la posición de desplazamiento
    const offset = -currentSlide * (60 / visibleProducts); // Desplazamiento en porcentaje
    console.log("offset: ", offset);
    document.querySelector(
      ".carousel"
    ).style.transform = `translateX(${offset}%)`;
  }

  console.log("currentslide despues del if: ", currentSlide);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Mostrar el primer producto al cargar la página
showSlide(currentSlide);

// Detecta cambios de tamaño de pantalla y reinicia el carrusel en la vista correspondiente
window.addEventListener("resize", () => showSlide(currentSlide));
