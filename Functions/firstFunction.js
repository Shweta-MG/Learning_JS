//First function

const singSong = (singerName) => {
  //console.log(`${singerName} is singing a song`)
};
singSong("Thør");

//print heart
const printHeart = (one, two) => {
  let heart = "<3";
  //console.log(`${one} has ${two}'s hearts`);
};
printHeart("Olivia", "Ester");

//print heart three times
const printHeartManyTimes = (str, times) => {
  for (i = 0; i < times; i++) {
    //console.log(`${str} has <3`)
  }
};
printHeartManyTimes("Camila", 4);

//print string many times in a row
const printStringRow = (str, num) => {
  let newRow = "";
  for (i = 0; i < num; i++) {
    newRow += str;
  }
  console.log(newRow);
  console.log();
};
console.log(printStringRow("I am learning JS ", 6));
console.log(printStringRow("I am trying hard learning JS ", 6));

//print average functions
array1 = [1, 2, 3, 4, 5, 6, 6, 7];

array2 = [1, 2, 3, 4, 5, 6, 6, 7, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 9];

const average = (array) => {
  let totalNumber = 0;
  for (let i = 0; i < array.length; i++) {
    totalNumber += array[i];
  }
  let averageNumber = totalNumber / array.length;
  return averageNumber;
};
//console.log(average(array1));
//console.log(average(array2));
