// Define grid

var duckGrid = [false, false, false, false, false, false, false, false, false];

var currentScore = 0;

var highScore = 0;

console.log("LENGTH OF GRID",duckGrid.length);

// Generate random number between 0 and 8

function randomNum() {
    return Math.floor((Math.random() * 9));
}

var randomDuck = randomNum();

console.log("RANDOM DUCK INDEX",randomDuck);

// Assign another random number to randomDuck variable

function newRandomDuck() {
  randomDuck = randomNum();
}

// Switch one grid item to true

function changeState(grid) {
  if (grid[randomDuck] === false) {
    grid[randomDuck] = true;
  } else if (grid[randomDuck] === true) {
    grid[randomDuck] = false;
  }
}

changeState(duckGrid);

console.log("RANDOM DUCK",randomDuck);

console.log("DUCK GRID",duckGrid);

// Add point to currentScore

function addPoint() {
  currentScore = currentScore + 1;
}

// Begin game when "Start" button is clicked

function beginGame() {
  onTimer();
  document.getElementById('start').innerHTML = 'play again';
  currentScore = 0;
  document.getElementById('yourScore').innerHTML = 'Your Score: ' + currentScore;
}


// timer

var secondsAlloted = 30;

function onTimer() {
  document.getElementById('mycounter').innerHTML = 'Seconds Remaining: ' + secondsAlloted;
  secondsAlloted--;
  if (secondsAlloted == 0) {
    alert('Your final score is ' + currentScore);  // Create conditional here depending on score
    secondsAlloted = 30;
  }
  else {
    setTimeout(onTimer, 1000);
  }
}


// Switch true grid item back to false onclick

function shootDuck(shotDuckIndex) {
  if (shotDuckIndex === randomDuck) {
    if (duckGrid[randomDuck] === true) {
      duckGrid[randomDuck] = false;
      newRandomDuck();
      changeState(duckGrid);
      changeDuckState(duckGrid);
      addPoint();
      console.log("Current Score", currentScore);
      displayScore();
    }
  }
}
