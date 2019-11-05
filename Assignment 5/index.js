//be sure to write instructions like this
// going to make all the letters be "buried" under the line
//get elements for all the letters
var b = document.getElementById('B')
b.addEventListener("click", BuryB);

var u = document.getElementById('U')
u.addEventListener("click", BuryU);
//changing color of U
u.addEventListener("mouseover", ChangeUColor);
u.addEventListener("mouseout", ChangeUBack);

var r = document.getElementById('R')
r.addEventListener("click", BuryR);

var y = document.getElementById('Y')
y.addEventListener("click", BuryY);

//write all the function for each bury action
//they're all supposed to be animated to go down
function BuryB() {
  b.style.top = "280px";
}

function BuryU() {
  u.style.top = "280px";
}

function BuryR() {
  r.style.top = "280px";
}

function BuryY() {
  y.style.top = "280px";
}
//function to change color of U
function ChangeUColor(){
  u.style.backgroundColor = "#ffb000";
}

function ChangeUBack(){
  u.style.backgroundColor = "#f4f4f4";
}
