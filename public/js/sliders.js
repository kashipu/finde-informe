function mostrarCifras(selectorCards, selectorCifras) {
  const cards = document.querySelectorAll(selectorCards);
  const cifras = document.querySelectorAll(selectorCifras);

  cards.forEach((card, index) => {
    card.addEventListener('click', function() {
      cifras.forEach(cifra => cifra.style.display = 'none');
      cifras[index].style.display = 'block';
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  mostrarCifras('.card-uno', '.cifras-item');
  mostrarCifras('.card-dos', '.cifra-space-box');
  mostrarCifras('.card-uno', '.texto-box');
  mostrarCifras('.ambiental-button', '.slide-content');
  mostrarCifras('.card-uno', '.finanzas-slider-item');
  mostrarCifras('.slider-asistencia-item', '.asistencia-textimage-box');
});

console.log(document.querySelectorAll(".slider-asistencia-item"))
console.log(document.querySelectorAll(".finanzas-slider-item"))
