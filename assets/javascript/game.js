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





	// array of words
var words = [            
	"kakariko",
	"hylia",
	"boomerang",
	"bombchus",
	"dekustick",
	"ganondorf",
	"hyrule",
	"navi",
	"zora", 
	"goron"
];

  //pick a random word
var word = words[Math.floor(Math.random() * words.length)];


  // array of empty spaces for words

// var answerArray = [
// 	"(_)(_)(_)(_)(_)(_)(_)(_)",
// 	"(_)(_)(_)(_)(_)",
// 	"(_)(_)(_)(_)(_)(_)(_)(_)(_)",
// 	"(_)(_)(_)(_)(_)(_)(_)(_)",
// 	"(_)(_)(_)(_)(_)(_)(_)(_)(_)",
// 	"(_)(_)(_)(_)(_)(_)(_)(_)(_)",
// 	"(_)(_)(_)(_)(_)(_)",
// 	"(_)(_)(_)(_)",
// 	"(_)(_)(_)(_)",
// 	"(_)(_)(_)(_)(_)",
// ];

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

	} else if (guess.length !==1) {  //used to check condition of possible inputs (empty string or more than one)
	  alert("Please enter a single letter.");  //alerts player to input one proper character 
	}  else {

		 //Update the game state with the guess
		for (var j = 0; j < word.length; j++) {   //create a new lopopingvariable called j, j runs from 0 up to word.length. we use this loop to step through each letter of word
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







