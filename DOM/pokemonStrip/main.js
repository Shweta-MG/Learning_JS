let body = document.querySelector('body');
let div = document.createElement('div');

//creating the header of the webpage
let h1 = document.createElement('h1')
h1.innerText = 'My Pokemon Strip'
body.appendChild(h1)

//creating the pokemon strip
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

let ul = document.createElement('ul');


for (let i = 1; i <= 151; i++){
    let newImage = document.createElement('img');    
    newImage.src = `${baseURL}${i}.png`
    let li = document.createElement('li');

    ul.appendChild(li);
    li.appendChild(newImage);
}

div.appendChild(ul);
body.appendChild(div);