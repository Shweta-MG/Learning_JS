//default params

const greeting = (person, msg = "Hey there", punch = "!!!!") => {
  return `${msg}, ${person} ${punch}`;
};
console.log(greeting("Shweta"));

console.log(greeting("Shweta", "HIIII"));

//spread feature
const num = [1, 2, 3, 4, 5, 6, 7, 8, 12, 12, 1, 3];
const newNums = [1, 2, 4, 5, 6, 7, 8, 8];

//console.log(...newNums, ...num)

console.log(...newNums, 1, 2, 3, 4)