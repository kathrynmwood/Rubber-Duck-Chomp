// Function that runs onclick

function killDuck(clickedDuckIndex) {
  if (clickedDuckIndex === randomDuck) {
    console.log("Hello from killDuck");
    var activeDuck = document.getElementsByClassName("active");
    console.log("ACTIVE DUCK",activeDuck);
    activeDuck.className = "inactive";
  }
}
