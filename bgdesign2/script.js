
function adjustItemHeights() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        // Set the height equal to the width
        const width = item.offsetWidth;
        item.style.height = `${width}px`;
    });
}

// Adjust item heights on page load
document.addEventListener('DOMContentLoaded', adjustItemHeights);

// Adjust item heights on window resize
window.addEventListener('resize', adjustItemHeights);

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
  
    items.forEach(item => {
      // Create and append the orb to each item
      const orb = document.createElement('div');
      orb.className = 'orb';
      item.appendChild(orb);
  
      item.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = item.getBoundingClientRect();
        const x = e.clientX - left - window.pageXOffset;
        const y = e.clientY - top - window.pageYOffset;
        orb.style.left = `${x}px`;
        orb.style.top = `${y}px`;
      });
  
      item.addEventListener('mouseleave', () => {
        orb.style.transform = `translate(-50%, -50%) scale(0)`;
        orb.style.opacity = 0;
      });
    });
  });
  