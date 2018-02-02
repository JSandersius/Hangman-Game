// Pick a random word
// Take players guess
// Quit the game if the player want to 
// Check that the players guess is a valid letter
// keep track of letters the player has guessed
// show player thier progress
// finish when the player has guessed the word
//________________
// Pick a random word
// While the word has not been guessed {
// Show the player their current progress 
// Get a guess from the player
  
// If the player wants to quit the game {
// 	Quit the game
// }
// Else if the guess is not a single letter {
// 	Tell the player to pick a single letter
// }
// Else {
// 	If the guess is in the word {
// 		Update the player's progress with the guess
// 	  } 
// 	}
// }
// Congatulate player on guessing the word





// array of Word Oprions 
var wordList = ["kakariko","hylia","boomerang","bombchus","dekustick","ganondorf","hyrule",
"navi","zora", "goron"];

//Solution will be held here.
var chosenWord = "";

//This will break the solution into individual letters to be stored in array.
var lettersInChosenWord = [];

//This will be the number of blanks we show based on the solution 
var numBlanks = 0;

// Holds a mix of blank and solved letters
var blankAndSucesses = [];

// Holds all of the wrong guesses
var wrongGuesses = [];

// Game counters
var winCounter = 0;
var losCounter = 0;
var numGuesses = 9;

// Funtions (These are bits of code that we call upon to run when needed)

//=============================================================================


// startGame()
// Its how we will start and restart the game. 
// Note: It's not being run here. It's just being made for future use.)
function startGame() {
// Reset the guesses back to 0.
numGuesses = 9;

// Solution is chosen randomly from wordList. 
chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

// The word is broken into intividual letters.
lettersInChosenWord = chosenWord.split("");

// We count the number of letters in the word.
numBlanks = lettersInChosenWord.length;

//We print the solution in console (for testing).
console.log(chosneWord);

//Critical Line- Here we *reset* the guess and success array at each round.

blanksAndSuccesses = [];

//Critical Line- Here we *reset* the wrong guesses from the previous round.

wrongGuesses = [];

 // Fill up the blanksAndSuccesses list with appropriate number of blanks.
	
  // This is based on number of letters in solution.

  for (var i = 0; i < numBlanks; i++) {
  	blanksAndSuccesses.push("_");
  }

// Print the initial blanks in console.
console.log(blanksAndSuccesses);

// Reprints the guessesLeft to 9
document.getElementById("guesses-left").innerHTML = numGuesses;

// Prints the blanks at the beginning of each round in HTML
document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join("");

//Clear the wrong guesses from the previous round
document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join("");

}

//checkLetters() function
// It's where we will do all of the comparisons for matches.
// Again, it's not being called here. It's just being made for future use.

function checkLetters(letter) {

	// This boolean will be toggles based on whether or not a user letter is found anywhere in the word.

	var letterInWord = false; 

	// Check if a letter exists inside the array at all. 
	for (var i = 0; i < numBlanks; i++) {
		if (chosenWord [i] === letter) {
			// If the letters exists then toggle this boolean to true. This will be used in the next step.

			letterInWord = true; 
		}
	}

	// If the letter exists somewhere in the word, then figure out exactly where (which indices).

	if(letterInWord) {

		//Loop through the word. 
		for (var j = 0; j < numBlanks; j++) {

			//Populate the blanksAndSuccesses with every instance of the letter. 
			if (chosenWord[j] === letter) {

				//Here we set the specific space in blanks and and letter equal to the letter when there is a match.

				blanksAndSuccesses[j] = letter;

			}
         } 
	
	//Logging for testing.
	console.log(blanksAndSuccesses);
}
// If the letter doesn't exist at all...

else {
	 //..then we add the letter to the list of wrong letters, and we subtract one of the guesses. 
	  wrongGuesses.push(letter);
	  numGuesses--;
   }
}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made.

function roundComplete() {

	//First, log an initial status update in the console telling us how many wins, losses, and guesses are left

	console.log("WinCount:" " + winCounter + " | LossCount: "+ lossCounter + " "| NumGuesses: " + numGuesses); 


	// Update the HTML to reflect the new number of guesses. Also update the correct guesses. 

	document.getElementById("guesses-left").innerHTML = numGuesses;

	// This will print the array of guesses and blanks onto the page. 

	document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
	
   // This will print the wrong guessed onto the page. 
   document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join("");


   //If we have gotten all the letters to match the solution...

   if (lettersInChosenWord.toString() === blankAndSuccesses.to )


  //pick a random word


var answerArray = [];
for (var i = 0; i < word.length; i++) {   //this FOR loop creates a looping variable i that starts at 0 that goes up to but deos not include word.length
	answerArray[i] = "_";    //each time around the loop, we add a new element to answerArray at answerArray[i]
}								//when loop finishes, answerArray will be the same length as the word

var remainingLetters = word.length;  //created a variable and set it to the length of the secret word
									//this is used to keep track of how many letters are left to be guessed, at each correct guess, this value is decremented by 1 for each letter

	//the Game Loop 						
while (remainingLetters > 0)  {
	//show player their progress 
	alert(answerArray.join(" "));  

	// Take input from the player 
	var guess = prompt("Guess a letter, or click Cancel to stop playing.");  //takes a guess from the player and saves it to the variable "guess". 
	if (guess === null)	{  //is this condition is true, we use the break to exit the loop 
		// Exit the game loop
		break; 
w
	} else if (guess.length !==1) {  //used to check condition of possible inputs (empty string or more than one)
	  alert("Please enter a single letter.");  //alerts player to input one proper character 
	}  else {

		 //Update the game state with the guess
		for (var j = 0; j < word.length; j++) {   //create a new lopoping variable called j, j runs from 0 up to word.length. we use this loop to step through each letter of word
			if (word[j] === guess) {			 //checks whether the current letter we're looking at matches the player's guess, if it does..  										
				answerArray[j] = guess;      //..we use this to update answer array with current guess, this works because the looping variable (j) can be used as an index for answerArray, just as it can be used as an index for (word)
				remainingLetters--;
			}
		}
	}
    // The end of the game loop
    } 

    // Show the answer and congratulate the player 
		alert(answerArray.join(" "));
		alert("Good job! the answer was" + word); 
	
 
	// Update answerArray and the remainingLetters for every correct guess







