let colorGenerator = document.querySelector('#colorGenerator');
let para = document.querySelector('#color_number');
let r;
let g;
let b;

let randomNumber = () => {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    let rgb = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = rgb;
    para.innerText = rgb  
    console.log('I am changing background color')

    colorGenerator.style.color = `rgb(${r + 30}, ${g + 30}, ${b + 30})`;
    colorGenerator.innerText = `rgb(${r + 30}, ${g + 30}, ${b + 30})`

}

colorGenerator.addEventListener('click', randomNumber);