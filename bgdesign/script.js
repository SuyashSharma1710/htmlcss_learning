
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
    const grid = document.querySelector('.grid');
    const orb = document.createElement('div');
    orb.className = 'orb';
    grid.appendChild(orb); // Append the orb to the grid container
  
    grid.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      
      let orbX = clientX;
      let orbY = clientY;
  
      const items = document.querySelectorAll('.item');
  
      // Calculate the position of the orb
      items.forEach(item => {
        const { left, top, right, bottom } = item.getBoundingClientRect();
        const gridRect = grid.getBoundingClientRect();
  
        // Adjust for the position of the grid container
        const adjustedLeft = left - gridRect.left;
        const adjustedTop = top - gridRect.top;
        const adjustedRight = right - gridRect.left;
        const adjustedBottom = bottom - gridRect.top;
  
        // Check if the cursor is within the item
        if (clientX >= adjustedLeft + gridRect.left && clientX <= adjustedRight + gridRect.left &&
            clientY >= adjustedTop + gridRect.top && clientY <= adjustedBottom + gridRect.top) {
          orb.style.left = `${orbX - gridRect.left}px`;
          orb.style.top = `${orbY - gridRect.top}px`;
        }
      });
    });
  });
  
  