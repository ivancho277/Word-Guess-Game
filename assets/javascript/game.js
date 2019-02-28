var wordchoices = ["volkl", "fischer", "line","armada","icelantic","salomon","rossignol","elan","blackdiamond","atomic","blizzard","nordica","faction","dynastar","volant","head","moment","stokli","scott"];
var wins = 0;
var looses = 0;
var guessesremaining = 13;
var currentword= "";
var lettersguessed = [];
var keepPlaying = true;


var chosenwordtext = document.getElementById('chosen-word');


function checkIfOnlyLettersEntered () {

}

//picks a random word from passed in array
function pickRandomWord(arr) {
  var randword = arr[Math.floor(Math.random() * myArray.length)];
  return randword;
}


//displays word to screen with ____
function displayWord(chosenword){
  for(var i = 0; i < chosenword; i++){
    chosenwordtext += '_';
  }
}

//user guesses letter if correct -> guess-- and show correct letter in place on screen
//if incorrect check # of guesses and ask again if there are any left.
function userTakesaGuesses(usersguess){
  
}

//shows single letter if chosen
function showletter(chosenword){
  
}

//counts guesses used and left
function GuessCounter(gussesused){
  
}


//checks to see if user has guesses left, if not ends game and asks to play again.
function isGameOver(numberofguesses){
  
}

//checks to see if full word has been spelled out.
function iWon(){
  
}


//put everthing together to play a game.
while(keepPlaying){
function PlayAGame(){
  return 'undef.';
}
}