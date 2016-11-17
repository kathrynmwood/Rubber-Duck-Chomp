// Selects random number from 1 to 9

function randomDuck() {
    return Math.floor((Math.random() * 9) + 1);
}

console.log(randomDuck());

// Changes image of duck on click

function changeImage(imageId) {
  if (document.getElementById(imageId).src == "./images/duck-inactive.png") {
    document.getElementById(imageId).src = "./images/duck.png";
  } else if (document.getElementById(imageId).src == "./images/duck.png"){
    document.getElementById(imageId).src = "./images/duck-inactive.png";
  }
}

console.log(document.getElementById("duck2").src);

changeImage("duck2");


// document.getElementById("duck3").src = "images/duck.png";

// document.getElementById("duck3").src = "images/duck.png";
