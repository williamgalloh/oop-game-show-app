/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 */

class Phrase {

  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    let selectedPhrase = this.phrase;
    let placeHolders = "";
    // Iterate through each character (including spaces) of the selected phrase
    for(let i = 0; i < selectedPhrase.length; i++) {
      let character = selectedPhrase[i];

      // Create the corresponding placeholder for the character
      if(character == " ") {
        placeHolders += `<li class="space"> </li>`;
      } else {
        placeHolders += `<li class="hide letter" data-letter="${character}">${character}</li>`;
      }
    }

    // Print placeholders on page
    document.querySelector("#phrase ul").innerHTML = placeHolders;
  }

  checkLetter(letter) {
    // Get all the placeholders that match the selected letter
    const matchedLetters = document.querySelectorAll("#phrase ul li[data-letter=" + letter + "]");
    return matchedLetters.length > 0;
  }

  showMatchedLetter(letter) {
    // Get all the placeholders that match the selected letter
    const matchedLetters = document.querySelectorAll("#phrase ul li[data-letter=" + letter + "]");

    // Show each of the matched placeholders
    for (let matchedLetter of matchedLetters) {
      matchedLetter.classList.remove('hide');
      matchedLetter.classList.add('show');
    }
  }

}