const person = {
  first_name: "Shweta",
  middle_name: "Malav",
  last_name: "Gupta",
};

console.log(person);

//Our First Object Exercise

const product = {
  name: "Gummy Bears",
  inStock: true,
  price: 1.99,
  flavors: ["grape", "apple", "cherry"],
};
//console.log(product)

//"64 Johnson Ave, Brooklyn, NY 11206" // this is the expected output format of the fullAddress string (keep an eye on the commas and/or spaces between the values and match that too!)

const fullAddress = {
  address: "64 Johnson Ave",
  city: "Brooklyn",
    state: "NY",
    zipCode: "11206"
};

console.log(
  `${fullAddress["address"]}, ${fullAddress["city"]}, ${fullAddress["state"]} ${fullAddress["zipCode"]}`
);

