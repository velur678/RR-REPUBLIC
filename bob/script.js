
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

document.addEventListener('click', function(event) {

  if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  }
})