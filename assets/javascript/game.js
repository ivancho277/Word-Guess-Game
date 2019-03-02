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
//sets currently chosen word
var currentword = chooseRandWord (wordchoices);
//assignment of blanksspaces to size of current word
var blanksWord = printBlank (currentword);
// var lettersguessed = [];
var keepPlaying = true;
 //global variables
var wins = 0;
var losses = 0;
var lettersGuessed = [];
var guessesremaining = 13;
//get all text areas by ID in order to modify
var chosenwordText = document.getElementById ('chosen-word');
var winText = document.getElementById ('wins-text');
var lossesText = document.getElementById('losses-text')
var chosenwordblanksText = document.getElementById ('chosen-word-blanks-text');
var InstructionText = document.getElementById ('instruction-text');
var remainingguessesText = document.getElementById ('remainingguesses-text');
var lettersguessedText = document.getElementById ('lettersguessed-text');
var startText = document.getElementById ('start-text');

chosenwordblanksText.textContent = blanksWord.toString ();


//returns randomly chosen word from array of words
function chooseRandWord (wordarray) {
  return wordarray[Math.floor (Math.random () * wordarray.length)];
}

//returns string of blank spaces equal to work
function printBlank (wordToPrint) {
  var stringOfBlanks = [];
  for (var i = 0; i < wordToPrint.length; i++) {
    stringOfBlanks[i] = '-';
  }
  return stringOfBlanks;
}

//takes a guessed letter from user, pushes it into array of guessed chars, subracts 1 from guesses left
function userGuess (guessedChar) {
  var letter = guessedChar;
  lettersGuessed.push(letter.toLowerCase ());
  guessesremaining--;
  return lettersGuessed;
}

//takes input word, spits out array of its chars
function wordToCharArray (word) {
  let charArray = [];
  for (var i = 0; i < word.length; i++) {
    charArray.push (word[i]);
  }
  return charArray;
}

//replaces correct index of blanksword with correctly chosen letter
function checkToSeeifPressedKeyIsInWord (char) {
  var guessed = char;
  for (var i = 0; i < currentword.length; i++) {
    if (guessed === currentword[i]) {
      blanksWord[i] = guessed;
    }
  }
}

//check to see if blanksWord doesnt include any '-' means its full of letters
function doWordsMatch(){
  if(!blanksWord.includes('-')){
    
    return true;

  }
  else {return false}
}

//reset number of guesses on new game
function winOrLoseCondition () {
  if(doWordsMatch()){
    currentword = chooseRandWord(wordchoices);
    lettersGuessed = [];
    blanksWord = printBlank(currentword);
    wins++;
    guessesremaining = 13;
  }
  else if(isgameOver()) {
    currentword = chooseRandWord(wordchoices);
    lettersGuessed = [];
    blanksWord = printBlank(currentword);
    losses++;
    guessesremaining = 13;
  }
}

//check if game is over
function isgameOver () {
  if (guessesremaining > 0 ) {
    
    return false;
  } else {
    
    return true;
  }
}

//Testing (left console.logs for testing purposes to be uncommented)
document.onkeyup = function (event) {
  
  //console.log (currentword); //test currentword chosen at random
  //console.log (wordToCharArray (currentword)); //test character array
  chosenwordblanksText.textContent = printBlank(currentword).toString();
  //console.log(printBlank(currentword).toString()); //test priting blanks
  if (event.key !== 'F5') {
    //makes sure that refresh key doesnt count as key for testing
    //console.log (event.key); //logs pressed key
    (userGuess(event.key)); //passes key pressed to userGuess function
   // console.log (lettersGuessed.toString()); //logs users guesses.
   // console.log (guessesremaining); //logs how many guesses remain
    chosenwordblanksText.textContent = printBlank (currentword); //prints blank spaces to html.
    //console.log (isgameOver ());
    
    lettersguessedText.textContent = lettersGuessed.toString();
    remainingguessesText.textContent =
      'Guesses Remaining : ' + guessesremaining.toString ();
    checkToSeeifPressedKeyIsInWord(event.key);
    
    //console.log(blanksWord);
    chosenwordblanksText.textContent = blanksWord;
   // console.log(doWordsMatch());
    //console.log(userGuess(event.key));
    winOrLoseCondition();
    winText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
  }
};
