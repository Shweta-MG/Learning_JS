//Make a array os 6 random numbers.

const Numbers = [1, 2, 3, 4, 5, 6];


//Assessing the values and replacing them 
//to write "Luna" instead of "Lua".
const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix'];


//leaderboard[1] = 'Luna';
//Bellatrix has fallen off the leaderboard and has been replaced by Draco!
//leaderboard[3] = 'Draco';

//Length of array

//Array inbuilt methods
//a. Push -pop == Add or remove something from end of the array
//leaderboard.push('Susi');

//leaderboard.push('Helena', 'Nahid', 'Zara');

//leaderboard.pop()


//b. shift - unshift == Add or remove something from start of the array


//leaderboard.unshift('Iman');

//leaderboard.shift()
console.log(leaderboard.shift())
console.log(leaderboard);
console.log(leaderboard.length);


//Exercise - 
const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter'];
//Remove the first element, "The Moon"
//console.log(planets.shift());


//Add in "Saturn" at the very end of the planets array
console.log(planets.push('Saturn'));
console.log(planets);

//Add "Mercury" as the first element in the planets array.
console.log(planets.unshift('Mercury'));
console.log(planets);