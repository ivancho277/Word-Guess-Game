var wordchoices = ["volkl", "fischer", "line", "armada", "icelantic", "salomon", "rossignol", "elan", "blackdiamond", "atomic", "blizzard", "nordica", "faction", "dynastar", "volant", "head", "moment", "stokli", "scott"];
var guessesremaining = 13;
var currentword = chooseRandWord(wordchoices);
// var lettersguessed = [];
var keepPlaying = true;

var wins = 0;
var looses = 0;
var lettersGuessed = [];
var guessesremaining = 10;




var chosenwordText = document.getElementById("chosen-word");
var winText = document.getElementById("wins-text");
var chosenwordblanksText = document.getElementById("chosen-word-blanks-text");
var InstructionText = document.getElementById("instruction-text");
var remainingguessesText = document.getElementById("remainingguesses-text");
var lettersguessedText = document.getElementById("lettersguessed-text");
var startText = document.getElementById("start-text");

//returns randomly chosen word from array of words
function chooseRandWord (wordarray) {
    return wordarray[Math.floor(Math.random()*wordarray.length)];
}

//returns string of blank spaces equal to work 
function printBlank(wordToPrint) {
    var stringOfBlanks = "";
    for(var i = 0; i < wordToPrint.length; i++){
        stringOfBlanks += "_ ";
    }
    return stringOfBlanks;
}

function userGuess(guessedChar){
    lettersGuessed.push(guessedChar.toLowerCase());
    guessesremaining--;

}

function gameOver(numGuesses){
    if(numGuesses === 0){
        document.write("LOSER!");
    }
}



document.onkeyup = function(event){
console.log(currentword);
console.log(printBlank(currentword));
if(event.key){
    console.log(event.key);
    userGuess(event.key);
    console.log(lettersGuessed.toString())
    console.log(guessesremaining);
chosenwordblanksText.textContent = printBlank(currentword);
gameOver(guessesremaining);
}
}
