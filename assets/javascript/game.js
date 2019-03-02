var wordchoices = [
  'volkl',
  'fischer',
  'line',
  'armada',
  'icelantic',
  'salomon',
  'rossignol',
  'elan',
  'blackdiamond',
  'atomic',
  'blizzard',
  'nordica',
  'faction',
  'dynastar',
  'volant',
  'head',
  'moment',
  'stokli',
  'scott',
];

var currentword = chooseRandWord(wordchoices);
// var lettersguessed = [];
var keepPlaying = true;

var wins = 0;
var looses = 0;
var lettersGuessed = [];
var guessesremaining = 10;

var chosenwordText = document.getElementById('chosen-word');
var winText = document.getElementById('wins-text');
var chosenwordblanksText = document.getElementById('chosen-word-blanks-text');
var InstructionText = document.getElementById('instruction-text');
var remainingguessesText = document.getElementById('remainingguesses-text');
var lettersguessedText = document.getElementById('lettersguessed-text');
var startText = document.getElementById('start-text');

//returns randomly chosen word from array of words
function chooseRandWord(wordarray) {
  return wordarray[Math.floor(Math.random() * wordarray.length)];
}

//returns string of blank spaces equal to work
function printBlank(wordToPrint) {
  var stringOfBlanks = '';
  for (var i = 0; i < wordToPrint.length; i++) {
    stringOfBlanks += '-';
  }
  return stringOfBlanks;
}

//takes a guessed letter from user, pushes it into array of guessed chars, subracts 1 from guesses left
function userGuess(guessedChar) {
  var letter = guessedChar;
  //check if in array of letter of chosen word. 
  var charArray = wordToCharArray(currentword);
 charArray.forEach(element => {
    if(element === letter){
      return letter;
    }
  });


  lettersGuessed.push(letter.toLowerCase());
  guessesremaining--;
}


//takes input word, spits out array of its chars
function wordToCharArray(word) {
  let charArray = [];
  for (var i = 0; i < word.length; i++) {
    charArray.push(word[i]);
  }
  return charArray;
}

//How to replace blanks??
function checkToSeeifPressedKeyIsInWord(char, word) {

}

function resetNumberOfGuesses() {
  return 10;
}


//check if game is over
function isgameOver() {
  if (guessesremaining > 0) {
    // numGuesses--;
    return false;
  } else {
    return true;
  }
}


//Testing
document.onkeyup = function (event) {

  var Iguessed = "";
  console.log(currentword); //test currentword chosen at random
  console.log(wordToCharArray(currentword)); //test character array
  console.log(printBlank(currentword)); //test priting blanks
  if (event.key !== "F5") { //makes sure that refresh key doesnt count as key for testing
    console.log(event.key); //logs pressed key
    console.log(userGuess(event.key)); //passes key pressed to userGuess function
    console.log(lettersGuessed); //logs users guesses.
    console.log(guessesremaining); //logs how many guesses remain
    chosenwordblanksText.textContent = printBlank(currentword); //prints blank spaces to html.
    console.log(isgameOver());
    lettersguessedText.textContent += (event.key + " ");
    remainingguessesText.textContent = "Guesses Remaining : " + guessesremaining.toString();
    //console.log(userGuess(event.key));
    if (isgameOver()) {
      guessesremaining = resetNumberOfGuesses();
    }

  }
};