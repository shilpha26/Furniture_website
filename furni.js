const navbarToggle = document.querySelector('.navbar-toggle');
const navbarNav = document.querySelector('.navbar-nav');

navbarToggle.addEventListener('click', function() {
  navbarNav.classList.toggle('show');
});

navbarNav.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    navbarNav.classList.remove('show');
  }
});
