// Define grid

var duckGrid = [false, false, false, false, false, false, false, false, false];

var currentScore = 0;

var highScore = 0;

var secondsAlloted = 30;

var timerRunning = false;

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

// Set all ducks to false

function ducksFalse(grid) {
  for (var i = 0; i < grid.length; i++) {
    grid[i] = false;
  }
  changeDuckState(grid);
}


// Add point to currentScore

function addPoint() {
  currentScore = currentScore + 1;
}

// Determine if yourScore is new highScore

function newHighScore() {
  document.getElementById('start').innerHTML = 'play again';
  if (currentScore >= highScore) {
    highScore = currentScore;
    alert('New personal best = ' + highScore + '!!!!');
  } else {
    alert('Your score = ' + currentScore);
  }
}

// Begin game when "Start" button is clicked

function beginGame() {
  if (timerRunning === false) {
    secondsAlloted = 30;
    changeDuckState(duckGrid);
    onTimer();
    document.getElementById('start').innerHTML = 'shoot those ducks!';
    currentScore = 0;
    document.getElementById('yourScore').innerHTML = 'Your Score: ' + currentScore;
  }
}


// timer

function onTimer() {
  if (secondsAlloted === 0) {
    timerRunning = false;
    newHighScore();
    ducksFalse(duckGrid);
  }
  else {
    timerRunning = true;
    setTimeout(onTimer, 1000);
    secondsAlloted--;
  }
  document.getElementById('mycounter').innerHTML = 'Seconds Remaining: ' + secondsAlloted;
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
      playSound();
    }
  }
}
