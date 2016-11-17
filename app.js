// Selects random number from 1 to 9

function randomDuck() {
    return Math.floor((Math.random() * 9) + 1);
}

console.log(randomDuck());

// Changes image of duck on click

// function changeImage(imageId) {
//   if (document.getElementById(imageId).src == "./images/duck-inactive.png") {
//     document.getElementById(imageId).src = "./images/duck.png";
//   } else if (document.getElementById(imageId).src == "./images/duck.png"){
//     document.getElementById(imageId).src = "./images/duck-inactive.png";
//   }
// }



function changeImage(imageId) {
  if (document.getElementById(imageId).src == "http://i.imgur.com/GyAkOyQ.png") {
    document.getElementById(imageId).src = "http://i.imgur.com/sAnalhL.png";
  } else if (document.getElementById(imageId).src == "http://i.imgur.com/sAnalhL.png"){
    document.getElementById(imageId).src = "http://i.imgur.com/GyAkOyQ.png";
  }
}


console.log(document.getElementById("duck5").src);

changeImage("duck5");
changeImage("duck9");

// document.getElementById("duck3").src = "images/duck.png";

// document.getElementById("duck3").src = "images/duck.png";
