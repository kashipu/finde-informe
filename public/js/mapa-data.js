const contenedorCards = document.querySelectorAll(".proyectos-slider-item")
const departamentosMap = document.querySelectorAll(".color-dep")
console.log(contenedorCards)
console.log(departamentosMap)

// Función para manejar el clic en los departamentosMap
function handleClickDepartamento(event) {
    // Eliminar la clase .dep-active de todos los departamentosMap
    departamentosMap.forEach(departamento => {
      departamento.classList.remove('dep-active');
    });
    // Agregar la clase .dep-active al departamento clicado
    event.target.classList.add('dep-active');

    // Obtener el índice del departamento clicado
    const index = Array.from(departamentosMap).indexOf(event.target);

    // Ocultar todas las tarjetas
    contenedorCards.forEach(tarjeta => {
      tarjeta.style.display = 'none';
    });
    // Mostrar la tarjeta correspondiente al departamento clicado
    contenedorCards[index].style.display = 'block';
  }

  // Agregar evento de clic a cada departamento
  departamentosMap.forEach(departamento => {
    departamento.addEventListener('click', handleClickDepartamento);
  });