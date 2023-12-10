//default params

const greeting = (person, msg = "Hey there", punch = "!!!!") => {
  return `${msg}, ${person} ${punch}`;
};
//console.log(greeting("Shweta"));

//console.log(greeting("Shweta", "HIIII"));

//spread feature
const num = [1, 2, 3, 4, 5, 6, 7, 8, 12, 12, 1, 3];
const newNums = [1, 2, 4, 5, 6, 7, 8, 8];

//spread two arrays to
//console.log(...newNums, ...num);

//spread more content in an array
//console.log(...newNums, 1, 2, 3, 4);

//spread a string into it's own elements
//console.log("Hello");
//console.log(..."Hello");


//spread in object
// add a new property
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA"
    },
    isStudent: false,
    hobbies: ["reading", "traveling", "coding"]
};
  
//console.log({ ...person, maritalStatus: 'Single' })


const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
    features: ["Bluetooth", "Backup Camera", "Keyless Entry"],
    owner: {
      firstName: "Alice",
      lastName: "Smith",
      age: 35
    },
    isAutomatic: true
};
  
//console.log({ ...person, ...car })

//destructuring in JS
const score = [111, 122, 12232, 3435, 54646]
const [gold, solver, bronze, ...everyoneElse] = score
console.log(gold)
console.log(solver)
console.log(bronze)
console.log(everyoneElse)