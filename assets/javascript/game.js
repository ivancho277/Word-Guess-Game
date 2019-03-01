var wordchoices = ["volkl", "fischer", "line", "armada", "icelantic", "salomon", "rossignol", "elan", "blackdiamond", "atomic", "blizzard", "nordica", "faction", "dynastar", "volant", "head", "moment", "stokli", "scott"];
// var guessesremaining = 13;
var currentword = "";
// var lettersguessed = [];
var keepPlaying = true;


var playerStats = {
  wins: 0,
  looses: 0,
  lettersGuessed: [],
  guessesRemaining: 10,

  //counts guesses left
GuessCounter: function() {
    this.guessesRemaining--;
}






}
var chosenwordtext = document.getElementById("chosen-word");
var wintext = document.getElementById("wins-text");
var chosenwordblankstext = document.getElementById("chosen-word-blank-text");
var InstructionText = document.getElementById("instruction-text");


var gameUntilityFunctions = {


  //checks if a letter only was entered?
  checkIfOnlyLettersEntered: function(letter) {

  },


  //picks a random word from passed in array
  pickRandomWord: function(arr) {
    var randword = arr[Math.floor(Math.random() * myArray.length)];
    return randword;
  }





}


//displays word to screen with ____
function displayWord(chosenword) {
  for (var i = 0; i < chosenword.length; i++) {
    chosenwordtext += '_';
  }
}

//user guesses letter if correct -> guess-- and show correct letter in place on screen
//if incorrect check # of guesses and ask again if there are any left.
function userTakesaGuesses() {
 
//HERE PRINT WHAT TO DO! 
  InstructionText = "Please guess a letter!";
  var userguess;
  document.onkeyup = function(event) {
    userguess = event.key;
  }
  return userguess;

}

function whatLetterIsShown(chosenword) {
  var guessedletter = userTakesaGuesses();        //function that returns letter chosen by user
  var numberOfLetterOccurances = chosenword.match(/guessedletter/g || []).length;   //Regex that return number of occurences of a letter in a string
   if(numberOfLetterOccurances >= 1) {
      return guessedletter;
    } 
    else {
      playerStats.GuessCounter();
    }
  
}

//shows single letter if chosen
function showletter(chosenword) {
 

}

//counts guesses used and left
function GuessCounter(gussesused) {

}


//checks to see if user has guesses left, if not ends game and asks to play again.
function isGameOver(numberofguesses) {

}

//checks to see if full word has been spelled out.
function iWon() {

}


//put everthing together to play a game.
while (keepPlaying) {
  function PlayAGame() {
    return 'undef.';


  }
}

