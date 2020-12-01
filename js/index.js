// Stop links from redirecting
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => link.addEventListener('click', function (e) {
  e.preventDefault()}))

//handles
const title = document.querySelector("h1");
const banner = document.querySelector('header img');
const link = document.querySelector('a')
const map = document.querySelector(".content-section img");
const body = document.body;

// Event Listeners

title.addEventListener("mouseover", mouseOver);

document.addEventListener("keydown", keyDown);

document.addEventListener("wheel", wheelies);

window.addEventListener("load", load);

link.addEventListener("focus", focus);

window.addEventListener("resize", resize);

document.addEventListener("scroll", scroll);

document.addEventListener("dblclick", dblClick);

document.addEventListener("contextmenu", contextClick);

// Propagation Events (bubbling) 
map.addEventListener("mousedown",mouseDown)
body.addEventListener("mousedown", mouseDown)
document.addEventListener("mousedown", mouseDown)

// Events

function mouseDown(e) {
  console.log(`You're clicking down on ${e.target.nodeName}-> 
    current target:${e.currentTarget.nodeName}` );
    // stopping the bubble phase with stopProp/immediateStopPr
    e.stopPropagation();
}

function mouseOver() {
    console.log('You moused over the h1 tag')
}

function wheelies() {
  console.log("You're using the mouse wheel")
}

function keyDown () {
  console.log("You pressed a key!")
}

function load () {
  alert("Congratulations, page has loaded successfully!")
}

function focus () {
  console.log("Focus Actived!")
}

function resize () {
  console.log("THE WINDOW IS BEING RESIZED!!!!")
}

function scroll () {
  console.log("Keep scrollin' scrolllin' scrollin'...")
}

function select () {
  console.log("You've been choosen!")
}

function dblClick () {
  console.log("User Double clicked")
}

function contextClick() {
  console.log('You right-clicked!')
}


