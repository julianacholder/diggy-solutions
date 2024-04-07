/*const burger = document.getElementById('burger');
 Open when someone clicks on the span element 
function openNav() {
    document.getElementById("myNav").style.width = "60%";
  }
  
   Close when someone clicks on the "x" symbol inside the overlay 
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  } */

  const burger = document.getElementById('burger');
  const curtainMenu = document.getElementById('myNav');
  
  // Adding click event listener to the burger menu
  burger.addEventListener('click', () => {
      // Toggle the visibility of the curtain menu by adding/removing a CSS class
      curtainMenu.classList.toggle('open');
  });

  
