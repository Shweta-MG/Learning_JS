let form = document.querySelector("#form");
let input = document.querySelector("#input");
let list = document.querySelector("#list");
const submitForm = (e) => {
  e.preventDefault();
  const animalName = input.value;
  const newLi = document.createElement("li");

  if (animalName.trim() !== "") {
    newLi.innerText = animalName;
  } else {
    return;
  }

  console.log(animalName);
  console.log(newLi);
  list.appendChild(newLi);

  input.value = "";
};

form.addEventListener("submit", submitForm);
