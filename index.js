// Working with Obejcts and Loops!!!


//✅ Goal 1: Loop through the following array and calculate the total score.
//✅ Follow Up: Print your result to the console using string interpolation for clarity.
// const games = [
//   { name: "Game 1", score: 5 },
//   { name: "Game 2", score: 8 },
//   { name: "Game 3", score: 2 },
//   { name: "Game 4", score: 10 }
// ];

//✅ Goal 2: Create another loop that only calculates total of scores greater than 5
//✅ Follow Up: Print your result to the console using string interpolation for clarity.




// ✅ Goal 3: Find the game with the highest score.
//✅ Follow Up: Print your result to the console using string interpolation for clarity.


// 🌟🌟 Bonus: Print out EACH game that scored above 'average'


// ✅ Goal 1: Loop through the array and calculate the total score
const games = [
  { name: "Game 1", score: 5 },
  { name: "Game 2", score: 8 },
  { name: "Game 3", score: 2 },
  { name: "Game 4", score: 10 }
];

// Start total at 0
let totalScore = 0;

// Loop to add each score to totalScore
for (let i = 0; i < games.length; i++) {
    console.log(games[i])
  totalScore  += games[i].score ;
}

// Print total using string interpolation
console.log(`The total score from all games is: ${totalScore}`);


// Goal 2: Calculate the total of scores greater than 5
let highScoresTotal = 0;

// Go through each game again
for (let i = 0; i < games.length; i++) {
  if (games[i].score > 5) {
    highScoresTotal = highScoresTotal + games[i].score;
  }
}

console.log(`The total of scores greater than 5 is: ${highScoresTotal}`);



// ✅ Goal 3: Find the game with the highest score
let highest = games[0]; // we assume the first is highest to start

// Loop through all games to compare scores
for (let i = 1; i < games.length; i++) {
  if (games[i].score > highest.score) {
    highest = games[i]; // we found a new highest
  }
}

console.log(`The game with the highest score is ${highest.name} with a score of ${highest.score}`);
