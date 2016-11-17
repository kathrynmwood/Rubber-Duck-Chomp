// Selects random number from 1 to 9

function randomDuck() {
    return Math.floor((Math.random() * 9) + 1);
}

console.log(randomDuck());

// Displays randomDuck

function displayDuck() {
  document.getElementById("duck" + randomDuck()).style.visibility = "visible";
}

displayDuck();










// Changes image of duck

// function changeImage(imageId) {
//   if (document.getElementById(imageId).src == "http://i.imgur.com/GyAkOyQ.png") {
//     document.getElementById(imageId).src = "http://i.imgur.com/sAnalhL.png";
//   } else if (document.getElementById(imageId).src == "http://i.imgur.com/sAnalhL.png"){
//     document.getElementById(imageId).src = "http://i.imgur.com/GyAkOyQ.png";
//   }
// }
