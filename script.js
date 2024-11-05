function mostrarSeccion(seccion) {
    document.querySelectorAll('.seccion').forEach(s => s.classList.remove('activa'));
    document.getElementById(seccion).classList.add('activa');
  }
  
  document.addEventListener("DOMContentLoaded", () => mostrarSeccion("inicio"));
  