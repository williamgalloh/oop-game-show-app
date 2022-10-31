/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 */

// Set data-key attribute to all onscreen keys to be able to reference easily later
let onscreenKeys = document.querySelectorAll("#qwerty .key");
for (let onscreenKey of onscreenKeys) {
  onscreenKey.setAttribute('data-key', onscreenKey.textContent);
}

let game = new Game();
document.getElementById("btn__reset").addEventListener('click', (e) => {
  game.startGame();
});

// Handle interaction when user uses onscreen keyboard
document.getElementById("qwerty").addEventListener('click', (e) => {
  if(e.target.tagName === "BUTTON") {
    let button = e.target;
    game.handleInteraction(button);
  }
});

// Handle interaction when user uses physical keyboard
document.addEventListener('keydown', (e) => {
  // Check that key pressed is a letter
  let regex = /^[a-z]{1}$/;
  if(regex.test(e.key)) {
    let button = document.querySelector(".key[data-key='" + e.key + "']");
    game.handleInteraction(button);
  }
});