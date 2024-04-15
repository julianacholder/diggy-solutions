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







  
