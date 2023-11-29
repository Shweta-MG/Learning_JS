//First function

const singSong = (singerName) => {
  //console.log(`${singerName} is singing a song`)
};
singSong("Thør");

const singSong1 = (singerName) => {
    return (`${singerName} is singing a song`)
  };
console.log(singSong1("Thør"));

//print heart
const printHeart = (one, two) => {
  let heart = "<3";
  //console.log(`${one} has ${two}'s hearts`);
};
printHeart("Olivia", "Ester");



const printHeart1 = (one, two) => {
    let heart = "<3";
    return (`${one} has ${two}'s hearts`);
  };
console.log(printHeart1("Olivia", "Ester"));
  


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
};
//console.log(printStringRow("I am learning JS ", 6));
//console.log(printStringRow("I am trying hard learning JS ", 6));

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
;


//add numbers and check the values before execution
arrayStr = [1, 2, 3, 4, 5, 'Olie', 'Kage']
const add = (array) => {
    let addStart = 0;
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] !== 'number') {
            return false;
        }
        addStart += array[i];        
    } 
    return addStart;
}
//console.log(add(array1));
//console.log(add(arrayStr));


// return last and second last element of the array
newStr = [];
const arrayValue = (array) => {
    if (array.length === 0) {
        return 'Null';
    }
    let x = array.length - 1;
    let y = array.length - 2;
    return (x, y)
}
//console.log(arrayValue(array1));
//console.log(arrayValue(newStr));



//return day of the week
const daysOfWeek = ['Null', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekDay = (num) => {
    let weekDayAsked = '';
    for (let i = 0; i < daysOfWeek.length; i++){
        if (num === i) {
            weekDayAsked = daysOfWeek[i];
            break;             
        }
    }
    return weekDayAsked;
}
console.log(weekDay(0));
console.log(weekDay(2));
console.log(weekDay(3));
console.log(weekDay(4));
console.log(weekDay(5));