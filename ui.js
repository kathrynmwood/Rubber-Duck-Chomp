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
