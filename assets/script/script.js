// function toggleMenu() {
//     var menuItems = document.querySelector('.menu-items');
//     menuItems.classList.toggle('show');
//     menuItems.classList.toggle('hide');
// }


// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  // modal.style.display = "block";
  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}


var modalLinks = document.getElementsByClassName("modal-link");

for (var i = 0; i < modalLinks.length; i++) {
  modalLinks[i].onclick = function() {
    if (modal.style.display === "block") {
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    }
  };
}
// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }