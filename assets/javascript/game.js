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
var guessesremaining = 13;
var currentword = chooseRandWord (wordchoices);
// var lettersguessed = [];
var keepPlaying = true;

var wins = 0;
var looses = 0;
var lettersGuessed = [];
var guessesremaining = 10;

var chosenwordText = document.getElementById ('chosen-word');
var winText = document.getElementById ('wins-text');
var chosenwordblanksText = document.getElementById ('chosen-word-blanks-text');
var InstructionText = document.getElementById ('instruction-text');
var remainingguessesText = document.getElementById ('remainingguesses-text');
var lettersguessedText = document.getElementById ('lettersguessed-text');
var startText = document.getElementById ('start-text');

//returns randomly chosen word from array of words
function chooseRandWord (wordarray) {
  return wordarray[Math.floor (Math.random () * wordarray.length)];
}

//returns string of blank spaces equal to work
function printBlank (wordToPrint) {
  var stringOfBlanks = '';
  for (var i = 0; i < wordToPrint.length; i++) {
    stringOfBlanks += '-';
  }
  return stringOfBlanks;
}

//takes a guessed letter from user, pushes it into array of guessed chars, subracts 1 from guesses left
function userGuess (guessedChar) {
  lettersGuessed.push(guessedChar.toLowerCase ());
  guessesremaining--;
}


//takes input word, spits out array of its chars
function wordToCharArray(word){
    let charArray = [];
    for(var i = 0; i < word.length; i++){
        charArray.push(word[i]);
    }
    return charArray;
}

//How to replace blanks??

//check if game is over
function gameOver (numGuesses) {
  if (numGuesses > 0) {
    return false;
  } else {
    return true;
  }
}


//Testing
  document.onkeyup = function (event) {  
      
    console.log (currentword);                      //test currentword chosen at random
    console.log(wordToCharArray(currentword));      //test character array
    console.log (printBlank (currentword));         //test priting blanks
    if (event.key !== "F5") {                       //makes sure that refresh key doesnt count as key for testing
      console.log (event.key);                      //logs pressed key
      userGuess (event.key);                        //passes key pressed to userGuess function
      console.log (lettersGuessed.toString ());     //logs users guesses.
      console.log (guessesremaining);               //logs how many guesses remain
      chosenwordblanksText.textContent = printBlank (currentword);  //prints blank spaces to html.
    
    }
  };

