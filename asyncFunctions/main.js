console.log("Sending request to server!!!!!");
const print = () => {
  console.log("Here is your data from server....!!!");
};
console.log("After sending the request!!!!");
setTimeout(print, 1000);

//call back hell avoid using

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
