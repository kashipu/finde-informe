const gestionAmbientalButtons = document.querySelectorAll('.ambiental-button a');
const gestionAmbientalContenedor = document.querySelectorAll('.gestion-ambiental-contenedor .gestion-ambiental-slide');

function slider(botones, contenedor) {
    botones.forEach(function(boton, index) {
      boton.addEventListener('click', function(event) {
        event.preventDefault();
        contenedor.forEach(function(img) {
          img.style.display = 'none';
        });
        contenedor[index].style.display = 'block';
      });
    });
  }

  slider(gestionAmbientalButtons, gestionAmbientalContenedor)