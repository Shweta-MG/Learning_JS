console.log("Sending request to server!!!!!");
const print = () => {
  console.log("Here is your data from server....!!!");
};
console.log("After sending the request!!!!");
setTimeout(print, 1000);





//call back hell avoid using
/**
const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "purple",
  "pink",
  "brown",
  "gray",
  "black",
  "white",
  "cyan",
  "magenta",
];

let body = document.body;

const bgColorChange = () => {
  for (let i = 0; i < colors.length; i++) {
    setTimeout(() => {
      body.style.backgroundColor = colors[i];
    }, i * 1000);
  }
};
bgColorChange();

 */



//rewriting it with promise
let body = document.body;
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

delayedColorChange("red", 1000)
  .then(() => delayedColorChange("orange", 1000))
  .then(() => delayedColorChange("yellow", 1000))
  .then(() => delayedColorChange("green", 1000))
  .then(() => delayedColorChange("purple", 1000))
  .then(() => delayedColorChange("pink", 1000))
  .then(() => delayedColorChange("brown", 1000))
  .then(() => delayedColorChange("gray", 1000))
  .then(() => delayedColorChange("black", 1000))
  .then(() => delayedColorChange("white", 1000))
  .then(() => delayedColorChange("cyan", 1000))
  .then(() => delayedColorChange("magenta", 1000));
