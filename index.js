// Add smooth scrolling behavior to navigation menu items
document.querySelectorAll('.menu-link').forEach(menuItem => {
  menuItem.addEventListener('click', function(event) {
    event.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
