const updateNav = () => {
  const navbar = document.querySelector('.navbar-custom');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-blue');
      } else {
        navbar.classList.remove('navbar-blue');
      }
    });
  }
}

export { updateNav };