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
const { firstName, lastName, age } = person

//console.log(firstName)

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
//spreading two object into one another -- change the sequence
//console.log({ ...person, ...car })
//console.log({ ...car, ...person })



//destructuring in JS
// const make = car.make === 'const {make} = car'
//const model = car.model === 'const {model} = model'
const { make, model, year, color } = car 
//console.log(make)

//renaming year variable to makeYear Variable and assigning a default value
const {year: makeYear = 'N/A'} = car
//console.log(makeYear)



//destructuring in JS
const score = [111, 122, 12232, 3435, 54646]
const [gold, solver, bronze, ...everyoneElse] = score
//console.log(gold)
//console.log(solver)
//console.log(bronze)
//console.log(everyoneElse)


const movies = [
    {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      genre: "Sci-Fi",
      rating: 8.8
    },
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: "Drama",
      rating: 9.3
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      genre: "Crime",
      rating: 8.9
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: "Action",
      rating: 9.0
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: "Drama",
      rating: 8.8
    }
  ];
  

const newMovie = movies.map(({ title, year, rating }) => {
      return`${title} ${year} is rater ${rating}`
  })
//console.log(newMovie)