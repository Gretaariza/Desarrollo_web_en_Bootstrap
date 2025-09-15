// Agregar un efecto suave al scroll del navbar
document.querySelectorAll('.nav-link').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    const seccion = document.querySelector(this.getAttribute('href'));
    seccion.scrollIntoView({ behavior: 'smooth' });
  });
});
