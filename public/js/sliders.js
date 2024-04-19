function mostrarCifras(selectorCards, selectorCifras, activeClass) {
  const cards = document.querySelectorAll(selectorCards);
  const cifras = document.querySelectorAll(selectorCifras);
  const scrollAmount = 400;
  let scrollDone = false;
  cards[0].classList.add(activeClass)
  cards.forEach((card, index) => {
    card.addEventListener('click', function() {
      cifras.forEach(cifra => cifra.style.display = 'none');
      cifras[index].style.display = 'block';
      if (!scrollDone) {
        window.scrollBy({
          top: scrollAmount,
          behavior: 'smooth'
        });
        scrollDone = true;
      }
    });
    card.addEventListener("click", function(){
      cards.forEach(card => card.classList.remove(activeClass))
      cards[index].classList.add(activeClass)
    })
  });
}

/* document.addEventListener('DOMContentLoaded', function() {
  mostrarCifras('.card-uno', '.cifras-item', "card-uno-active");
  mostrarCifras('.card-dos', '.cifra-space-box', "active");
  mostrarCifras('.card-uno', '.texto-box', "active");
  mostrarCifras('.ambiental-button', '.slide-content', "active");
  mostrarCifras('.card-uno', '.finanzas-slider-item', "active");
  mostrarCifras('.slider-asistencia-item', '.asistencia-textimage-box', "active");
});
 */