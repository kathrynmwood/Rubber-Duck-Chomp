
// Function that changes duck state

function changeDuckState(grid) {
  for (var i = 0; i < grid.length; i++){
    if (grid[i] === true) {
      document.getElementById(i).className = "active";
    } else if (grid[i] === false) {
      document.getElementById(i).className = "inactive";
    }
  }
}


// changeDuckState(duckGrid);


// Function that displays current Score

function displayScore() {
  document.getElementById("yourScore").innerHTML = "Your Score: " + currentScore;
}

// Play mp3

var sqeak = new Audio();
squeak.src = "Gunshot-sound/Gunshot-sound.mp3";
function playSound() {
    squeak.play();
}
