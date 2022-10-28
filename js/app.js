/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 */

let game = new Game();
document.getElementById("btn__reset").addEventListener('click', (e) => {
  game.startGame();
});

document.getElementById("qwerty").addEventListener('click', (e) => {
  if(e.target.tagName === "BUTTON") {
    game.handleInteraction(e);
  }
});