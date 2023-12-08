//functions scope - Global scope
let totalWords = 0;

const updateTotalWords = (number) => {
  totalWords = number;
  return totalWords;
};

//console.log(updateTotalWords(56));

//
const birdNames = [
  "Sparrow",
  "Robin",
  "Blue Jay",
  "Cardinal",
  "Eagle",
  "Hawk",
  "Pigeon",
  "Crow",
  "Hummingbird",
  "Owl",
];
let birdName = "";
const birdWatch = (number) => {
  for (let i = 0; i < birdNames.length; i++) {
    if (number === i && number <= birdNames.length) {
      birdName = birdNames[i];
      break;
    }

    birdName = "Invalid index";
  }
  return birdName;
};

//console.log(birdWatch(-1));
//console.log(birdWatch(1));
//console.log(birdWatch(9));
//console.log(birdWatch(11));

//functions scope - Block scope
//functions scope - Lexical scope
//higher order functions - Func as argument

const rollDie = () => {
  num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
};

const runFunction = (functions) => {
  rollDie();
  rollDie();
};

const runFunctionTenTimes = (functions) => {
  for (let i = 0; i < 10; i++) {
    functions();
  }
};

//runFunction(rollDie);
//runFunctionTenTimes(rollDie);

const animals = [
    {
        name: "Buddy", type: "Dog", breed: "Golden Retriever", color: "Golden", sound() {
            return (`${this.name} is a ${this.type} animal. It's breed is ${this.breed} and it is very noiseyy`)
  } },
  { name: "Whiskers", type: "Cat", breed: "Siamese", color: "Cream" },
  { name: "Hoppy", type: "Rabbit", breed: "Holland Lop", color: "Gray" },
  { name: "Spike", type: "Hedgehog", breed: "African Pygmy", color: "Brown" },
  { name: "Mittens", type: "Cat", breed: "Persian", color: "White" },
];

//console.log(animals[0].sound());

// try and catch

const greet = (name) => {
  try {
    let newName = name.toUpperCase().repeat(3)
    console.log(`${newName} is being greeted by us!!`)
  } catch (e) {
    //console.log(e);
    console.log(`${name} is not a valid input.`)
}
}

greet('Shweta');
greet(89);


//reduce f