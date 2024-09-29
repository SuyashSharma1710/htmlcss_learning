// script.js
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
    
    // Adjust the speed factor as needed
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
  });
  