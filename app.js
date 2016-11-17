function init() {
   console.log("Hello from JS!")
}

window.onload = init;

// Selects random number from 1 to 9

function randomDuck() {
    return Math.floor((Math.random() * 9) + 1);
}

console.log(randomDuck());

// Sets current duck

var currentDuck = document.getElementById("duck" + randomDuck());


// Displays randomDuck

// function displayDuck() {
//   document.getElementById("duck" + randomDuck()).style.visibility = "visible";
// }

function displayDuck() {
  currentDuck.style.visibility = "visible";
}

displayDuck();

// Hide Duck

// function hideDuck() {
//   document.getElementById("duck" + randomDuck()).style.visibility = "hidden";
// }

function hideDuck() {
  currentDuck.style.visibility = "hidden";
}

// Event listener for images


document.getElementById("h1").addEventListener("click", alert("hello"));



// Checks visibility of duck and changes it

// timer

var secondsAlloted = 30;
function onTimer() {
  document.getElementById('mycounter').innerHTML = secondsAlloted;
  secondsAlloted--;
  if (secondsAlloted < 0) {
    alert('Your score is SCORE VARIABLE HERE.');  // Create conditional here depending on score
  }
  else {
    setTimeout(onTimer, 1000);
  }
}




// Functions to Build:

//
  //

//






// Changes image of duck

// function changeImage(imageId) {
//   if (document.getElementById(imageId).src == "http://i.imgur.com/GyAkOyQ.png") {
//     document.getElementById(imageId).src = "http://i.imgur.com/sAnalhL.png";
//   } else if (document.getElementById(imageId).src == "http://i.imgur.com/sAnalhL.png"){
//     document.getElementById(imageId).src = "http://i.imgur.com/GyAkOyQ.png";
//   }
// }
