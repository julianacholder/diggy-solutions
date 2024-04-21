/*const burger = document.getElementById('burger');
 Open when someone clicks on the span element 
function openNav() {
    document.getElementById("myNav").style.width = "60%";
  }
  
   Close when someone clicks on the "x" symbol inside the overlay 
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  } 

  const burger = document.getElementById('burger');
  const curtainMenu = document.getElementById('myNav');
  
  // Adding click event listener to the burger menu
  burger.addEventListener('click', () => {
      // Toggle the visibility of the curtain menu by adding/removing a CSS class
      curtainMenu.classList.toggle('open');
  }); */

  const txts=document.querySelector(".animate-text").children,
  txtsLen=txts.length;
let index=0;
const textInTimer=3000,
   textOutTimer=2800;

function animateText() {
for(let i=0; i<txtsLen; i++){
 txts[i].classList.remove("text-in","text-out");  
}
txts[index].classList.add("text-in");

setTimeout(function(){
   txts[index].classList.add("text-out");              
},textOutTimer)

setTimeout(function(){

 if(index == txtsLen-1){
     index=0;
   }
  else{
      index++;
    }
   animateText();
},textInTimer); 
}

window.onload=animateText;

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const countersContainer = document.getElementById("section_counter");
let counters = countersContainer.querySelectorAll(".counter-item .counter");
let isAnimationRunning = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !isAnimationRunning) {
      isAnimationRunning = true;
      animateCounters();
    }
  });
}, { threshold: 0.5 }); // Adjust the threshold as needed

observer.observe(countersContainer);

// Function to update counter and apply animation
function updateCounterAndAnimate() {
  let speed = 200;
  counters.forEach((counter, index) => {
    function updateCounter() {
      const targetNumber = +counter.dataset.target;
      const initialNumber = +counter.innerText;
      const incPerCount = targetNumber / speed;
      if (initialNumber < targetNumber) {
        counter.innerText = Math.ceil(initialNumber + incPerCount);
        setTimeout(updateCounter, 40);
      } else {
        counter.innerText = targetNumber;
      }
    }
    updateCounter();
    // Apply animation to the counter element
    counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
      index / counters.length + 0.5
    }s`;
  });
}

// Function to animate counters
function animateCounters() {
  updateCounterAndAnimate();
}







  
