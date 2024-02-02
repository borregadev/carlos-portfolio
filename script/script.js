function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('show');
    menuItems.classList.toggle('hide');
}

function removeScrollSnap() {
    var container = document.querySelector('.scroller');
  
    // Check if the screen width is less than or equal to 480 pixels
    if (window.innerWidth <= 480) {
      container.classList.remove('scroller');
    } else {
      container.classList.add('scroller');
    }
  }
  
  // Run the function on page load and whenever the window is resized
  document.addEventListener('DOMContentLoaded', removeScrollSnap);
  window.addEventListener('resize', removeScrollSnap);
  