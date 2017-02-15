// Function that changes duck state

function changeDuckState(grid) {
    for (var i = 0; i < grid.length; i++) {
        if (grid[i] === true) {
            document.getElementById(i).className = "active";
        } else if (grid[i] === false) {
            document.getElementById(i).className = "inactive";
        }
    }
}


// Function that displays current Score

function displayScore() {
    document.getElementById("yourScore").innerHTML = "Your Score: " + currentScore;
}

// High Scoreboard

function updateScoreBoard() {
    // check if highscore, get initials, dom manipulate
    for (let i = 0; i < highScoreArray.length; i++) {
      if (currentScore > highScoreArray[i]) {
        highScoreArray[i] = currentScore;
        initials[i] = prompt("You set a new high score! What are your initials");
        // highScoreArray.sort(function(a, b) { return a - b });
        return;

          }
        }
      }
        // dom manipulation here

//
//         return;
//       } else if (currentScore > highScoreArray[1])  {
//         initials[1] = prompt("You set a new high score! What are your initials");
//         highScoreArray[1] = currentScore;
//         return;
//       } else if (currentScore > highScoreArray[2]) {
//         initials[2] = prompt("You set a new high score! What are your initials");
//         highScoreArray[2] = currentScore;
//         return;
//       }
//     }
// }
// if checks if it's a high score
// if so, add it
// sort the array
// chop off the end if less than 3

// Play gunshot mp3

var gunshot = new Audio();
gunshot.src = "sounds/Gunshot-sound/Gunshot-sound.mp3";

function playShotSound() {
    gunshot.play();
}

// Play squeak mp3

var squeak = new Audio();
squeak.src = "sounds/Squeaky-toy-sound-effect/Squeaky-toy-sound-effect.mp3";

function playSqueakSound() {
    squeak.play();
}


// Play epic battle music mp3

var epicBattle = new Audio();
epicBattle.src = "sounds/Epic-battle-music-grzegorz-majcherczyk-heroica/Epic-battle-music-grzegorz-majcherczyk-heroica.mp3"

function playGameSound() {
    epicBattle.play();
}

// Play jaws theme song mp3

var jaws = new Audio();
jaws.src = "sounds/Jaws-theme-song/Jaws-theme-song.mp3";

function playJaws() {
    jaws.play();
}
