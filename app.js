// Selects random number from 1 to 9

function randomDuck() {
    return Math.floor((Math.random() * 9) + 1);
}

console.log(randomDuck());

// Changes image of duck on click

function changeImage() {
  if (document.getElementById("duck3").src === "images/duck-inactive.png") {
    document.getElementById("duck3").src = "images/duck.png";
  // } else {
  //   document.getElementById(imageId).src = "images/duck-inactive.png";
  }
}

changeImage();


// document.getElementById("duck3").src = "images/duck.png";

// document.getElementById("duck3").src = "images/duck.png";
