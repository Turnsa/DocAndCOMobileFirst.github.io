// Toggle navigation menu
const menu = document.querySelector('.icons-burger');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', function() {
    navbar.classList.toggle('active');
});

// Lazy load images
document.querySelectorAll('img').forEach(img => {
  if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
});