/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js 
 */

class Game {

  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('Treehouse rocks'),
      new Phrase('Javascript is easy'),
      new Phrase('I want to be a developer'),
      new Phrase('To infinity and beyond'),
      new Phrase('Welcome to the space jam')
    ];
    this.activePhrase = null;
  }

  getRandomPhrase() {
    let randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }

  startGame() {
    // Hide start screen
    document.getElementById("overlay").style.display = "none";

    // Get phrase and display on screen
    let phrase = this.getRandomPhrase();
    this.activePhrase = phrase;
    this.activePhrase.addPhraseToDisplay();
  }  

  handleInteraction(buttonPressed) {
    let letter = buttonPressed.textContent;

    // Disable letter on keyboard
    buttonPressed.setAttribute('disabled', true);

    // Add wrong class if letter does not match, or chosen if it does match
    if(!this.activePhrase.checkLetter(letter)) {
      buttonPressed.classList.add('wrong');
      this.removeLife();
      if(this.missed === 5) {
        this.gameOver('lose');
      }
    } else {
      buttonPressed.classList.add('chosen');
      this.activePhrase.showMatchedLetter(letter);
      if(this.checkForWin()) {
        this.gameOver('win');
      }
    }
  }

  checkForWin() {
    // Check if any of the letters are still hidden
    return document.querySelectorAll("#phrase .letter.hide").length === 0;
  }

  gameOver(winOrLose) {
    // Update the start screen overlay depending if the user won/lost
    const startOverlay = document.getElementById("overlay");
    startOverlay.className = winOrLose;
    document.getElementById("game-over-message").textContent = winOrLose == 'win' ? "You Won!" : "You Lost!";
    startOverlay.style.display = "flex";

    // Show confetti animation if user won
    let lottie = document.querySelector('.success-lottie');
    if(winOrLose === "win") {     
      lottie.style.display = "block";
      lottie.play();
    } else {
      lottie.style.display = "none";
      lottie.stop();
    }

    // Reset keyboard and scoreboard
    let keys = document.querySelectorAll("#qwerty .key");
    for (let key of keys) {
      key.removeAttribute('disabled');
      key.classList.remove('wrong');
      key.classList.remove('chosen');
    }

    this.missed = 0;
    let lives = document.querySelectorAll("#scoreboard .tries img");
    for (let life of lives) {
      life.setAttribute('src', 'images/life-icon.png');
    }

  }

  removeLife() {
    this.missed++;
    let heartImg = document.querySelector("#scoreboard .tries:nth-child(" + this.missed + ") img");
    heartImg.setAttribute('src', 'images/explosion-icon.png');
  }

}