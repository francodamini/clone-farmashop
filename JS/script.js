//HEADER

//BARRA MEDIA

const input = document.querySelector("input");
const lupa = document.getElementById("lupa");
const flecha = document.getElementById("flecha");

input.addEventListener("input", () => {
  if (input.value.trim() != "") {
    lupa.classList.remove("active");
    flecha.classList.add("active");
  } else {
    lupa.classList.add("active");
    flecha.classList.remove("active");
  }
});

//MODAL

const hamburger = document.getElementById("hamburger");
const modal = document.getElementById("hamburger_modal");
const btn_cerrar = document.getElementById("btn_cerrar");

hamburger.addEventListener("click", () => {
  modal.classList.add("show");
  modal.showModal();
});

btn_cerrar.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.close();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
    modal.close();
  }
});

//BARRA INFERIOR

const spans = document.querySelectorAll(".barra-inferior span");
let indice = 0;

function changeSpan() {
  spans[indice].classList.remove("active");
  indice = (indice + 1) % spans.length;
  spans[indice].classList.add("active");
}

setInterval(changeSpan, 10000);
