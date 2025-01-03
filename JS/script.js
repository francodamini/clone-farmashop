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

//BARRA INFERIOR

const spans = document.querySelectorAll(".barra-inferior span");
let indice = 0;

function changeSpan() {
  spans[indice].classList.remove("active");
  indice = (indice + 1) % spans.length;
  spans[indice].classList.add("active");
}

setInterval(changeSpan, 10000);
