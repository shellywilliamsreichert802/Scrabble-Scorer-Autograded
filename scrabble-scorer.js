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

   alg1 = {
      name: 'Scrabble',
      description: 'The traditional scoring algorithm.',
      scoringFunction: oldScrabbleScorer
   },
   alg2 = {
      name: 'Simple Score',
      description: "Each letter is worth 1 point.",
      scoringFunction: simpleScorer
   },
   alg3 = {
         name: 'Bonus Vowels',
      description: 'Vowels are 3 points, consonants are 1 point.',
      scoringFunction: vowelBonusScorer
   }
];

function scorerPrompt() {
   const readline = require('readline-sync');
   const choice = readline.question('Which scoring algorithm would you like to use? \n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ');
   const selectedAlgorithm = scoringAlgorithms[choice];
if (!selectedAlgorithm) {
   console.log('INVALID INPUT. Enter 0, 1, or 2.');
   return scorerPrompt(); //Recurse to prompt again
}

return selectedAlgorithm;
}

function transform() {};

// let newPointStructure;
function createNewPointStructure() {
  const newPointStructure = {};
  const scrabbleValues = {
    a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4,
    i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3,
    q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8,
    y: 4, z: 10
  };

  // Create newPointStructure by mapping oldPointStructure
  for (const letter in scrabbleValues) {
    newPointStructure[letter] = scrabbleValues[letter];
  }

  return newPointStructure;
}

// Example usage:
const newPointStructure = createNewPointStructure();
// console.log(newPointStructure);


function runProgram() {
   initialPrompt(); 
   const word = input.question("Enter a word: ");
   selectedAlgorithm = scorerPrompt();
   const score = selectedAlgorithm.scoringFunction(word);
   console.log(`Score for ${word} = \n${score}`);
   // console.log(`${oldScrabbleScorer(word)}`);
   // console.log(`Simple Score: ${simpleScorer(word)}`);
   // console.log(`Vowel Bonus Score: ${vowelBonusScorer(word)}`);

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