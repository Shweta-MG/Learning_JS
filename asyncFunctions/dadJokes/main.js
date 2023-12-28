const jokeContainer = document.querySelector(".jokeContainer");
const jokeBtn = document.querySelector(".jokeBtn");
/**
 const getJoke = async () => {
   //declare the header for the API fetching as a variable
   configHeader = {
     headers: {
       Accept: "application/json",
     },
   };
 
   // fetch the data from API and update
   const newJoke = await fetch("https://icanhazdadjoke.com/", configHeader)
     .then((res) => res.json())
     .then((data) => data.joke);
   console.log("Button is clicked");
 
   //update the innerHTML of the joke container
   jokeContainer.innerHTML = newJoke;
 };
 */

/**
  * 
 const getJoke = async () => {
  //declare the header for the API fetching as a variable
  configHeader = {
    headers: {
      Accept: "application/json",
    },
  };

  // fetch the data from API and update
  const res = await fetch("https://icanhazdadjoke.com/", configHeader);
  const data = await res.json();

  //update the innerHTML of the joke container
  jokeContainer.innerHTML = data.joke;
};

jokeBtn.addEventListener("click", getJoke);
  * 
  */




const addNewJoke = async () => {
  const jokeText = await getJoke();
  console.log(jokeText);
  jokeContainer.innerHTML = jokeText;
};

const getJoke = async () => {
  //declare the header for the API fetching as a variable
  configHeader = {
    headers: {
      Accept: "application/json",
    },
  };

  // fetch the data from API and update
  const res = await fetch("https://icanhazdadjoke.com/", configHeader);
  const data = await res.json();
  console.log(data.joke);
  return data.joke;
};

jokeBtn.addEventListener("click", addNewJoke);
