const bigNumbersArray = [
  45, 92, 17, 64, 28, 53, 39, 81, 106, 22, 75, 33, 94, 58, 11, 79, 102, 27, 68,
  49, 88, 14, 71, 36, 120, 8, 57, 95, 23, 67, 41, 89, 52, 19, 78, 113, 31, 84,
  16, 63, 98, 55, 43, 74, 105, 29, 83, 60, 99, 47,
];

//const printNumbers = (element) => {console.log(element)}

//printNumbers(bigNumbersArray[1]);

//bigNumbersArray.forEach(printNumbers);

bigNumbersArray.forEach((element) => {
  if (element % 2 === 0) {
    //console.log(element);
  }
});

const movies = [
  { title: "Inception", score: 8.8 },
  { title: "The Shawshank Redemption", score: 9.3 },
  { title: "The Dark Knight", score: 9.0 },
  { title: "Pulp Fiction", score: 8.9 },
  { title: "Forrest Gump", score: 8.8 },
  // Add more movies as needed
];

//movies.forEach((movie) => console.log(`The ${movie.title} has score ${movie.score} / 100 `))

movies.forEach((e) => {
  if (e.score < 9) {
    //console.log(`The ${e.title} has score ${e.score} / 100 `);
  }
});

const newMovies = movies.map((e) => e.title.toUpperCase());
//console.log(newMovies);

const newMoviesScore = movies.map((e) => Math.round(e.score * 3));
//console.log(newMoviesScore);

const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];


const firstName = fullNames.map(e => e.first);
console.log(firstName);