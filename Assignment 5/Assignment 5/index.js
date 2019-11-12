//be sure to write instructions like this
// going to make all the letters be "buried" under the line
//get elements for all the letters
var b = document.getElementById('B');
b.addEventListener("click", AddAnimationB);

var u = document.getElementById('U');
u.addEventListener("click", AddAnimationU);
u.addEventListener("click", ChangeUColor);
u.addEventListener("mouseup", ChangeUBack);

var r = document.getElementById('R');
r.addEventListener("click", AddAnimationR);

var y = document.getElementById('Y');
y.addEventListener("click", AddAnimationY);

//call animation from css
function AddAnimationB(){
  b.classList.add("animation");
  setTimeout(AddAnimationB, 5000);
}
function AddAnimationU(){
  u.classList.add("animation");
}
function AddAnimationR(){
  r.classList.add("animation");
}
function AddAnimationY(){
  y.classList.add("animation");
}
//getting elements andfunctions to change color of U and back
var uColor = document.getElementById('u-pos');
uColor.addEventListener("click", ChangeUColor);
uColor.addEventListener("mouseup", ChangeUBack);

function ChangeUColor(){
  uColor.style.backgroundColor = "#ffb000";
}
function ChangeUBack(){
  uColor.style.backgroundColor = "#f4f4f4";
}
//for loops = bringing in a lot of little black squares -- they're kind of spooky, right?
//we want them to appear when you click the Y
  y.addEventListener("click", AddSqr);
function AddSqr(){
  //we want 40 squares
  for(i=0; i<40; i++){
    //make the div for the shape to exist in
    var sqr = document.createElement("div");
    //change the styling and then add appropriate css class
    sqr.style.left = Math.random() * 1300 + "px";
    sqr.style.top = Math.random() * 800 +"px";
    console.log(Math.random());
    sqr.classList.add("shape");
    var container = document.getElementById("container");
    container.appendChild(sqr);
  }
}
