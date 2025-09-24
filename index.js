const menu = document.querySelector('.icons-burger');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', function() {
    navbar.classList.toggle('active');
});