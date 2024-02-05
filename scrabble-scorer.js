// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");
   // Define the initialPrompt function
   function initialPrompt() {
      console.log("Let's play some scrabble!");
   };

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

// let simpleScorer;
function simpleScorer(word) {
   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
   let score = 0;

   for (let letter of word.toLowerCase()) {
      if (alphabet.includes(letter)) {
      score += 1;
    }
  }
  return score;
}

// let vowelBonusScorer;
function vowelBonusScorer(word) {
    const vowels = "aeiouAEIOU"; // List of vowels (both lowercase and uppercase)
    let score = 0;

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (vowels.includes(char)) {
            // Add 3 points if character is a vowel
            score += 3;
        } else {
            // Otherwise, add 1 point if character is a consonant
            score += 1;
        }
    }

    return score;
}

let scrabbleScorer;

const scoringAlgorithms = [
   {
      name: 'Scrabble',
      description: 'The traditional scoring algorithm.',
      scoringFunction: oldScrabbleScorer
   },
   {
      name: 'Simple Score',
      description: "Each letter is worth 1 point.",
      scoringFunction: simpleScorer
   },
   {
         name: 'Bonus Vowels',
      description: 'Vowels are 3 points, consonants are 1 point.',
      scoringFunction: vowelBonusScorer
   },
];

function scorerPrompt() {
    console.log("Welcome to the Scrabble score calculator!");
    console.log("Which scoring algorithm would you like to use?");
    console.log("0 - Scrabble: The traditional scoring algorithm.");
    console.log("1 - Simple Score: Each letter is worth 1 point.");
    console.log("2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.");

    const selectedAlgorithm = input.question("Enter 0, 1, or 2: ");
    
    // Validate user input
    if (selectedAlgorithm !== '0' && selectedAlgorithm !== '1' && selectedAlgorithm !== '2') {
        console.log("Invalid input. Please choose 0, 1, or 2.");
        return scorerPrompt(); // Recurse to prompt again
    }

    return {
        algorithm: selectedAlgorithm,
        name: getAlgorithmName(selectedAlgorithm) // You can implement this function to return algorithm names
    };
}


function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt(); 
   const word = input.question("Enter a word: ");
   console.log(`${oldScrabbleScorer(word)}`);
   console.log(`Simple Score: ${simpleScorer(word)}`);
   console.log(`Vowel Bonus Score: ${vowelBonusScorer(word)}`);

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
