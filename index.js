console.log(1)
document.getElementById('toggle').onclick = function (){
   if (document.getElementById('toggle').innerText === 'Light') {
       document.getElementById('toggle').innerText = 'Dark'
       document.body.style.backgroundColor = 'black'
       document.body.style.color = 'white'
   } else {
       document.getElementById('toggle').innerText = 'Light'
       document.body.style.backgroundColor = 'white'
       document.body.style.color = 'black'
   }
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}