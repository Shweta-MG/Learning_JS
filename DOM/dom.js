let h1 = document.querySelector('h1'); //global variables
h1.innerText = 'I am updated inner text';
document.querySelector('#about').innerHTML += '<h3> I am updated inned adjacent element </h3> <sup>I am testing</sup>'


//change the id (attribute) using DOM
document.querySelector('#contact').id = 'contact-details';


//create element than append it
let h4 = document.createElement('h4') //global variables
h4.innerText = 'I am being appended';
let h2 = document.querySelector('.section-title')
h2.appendChild(h4)


//insertAdjacentElement()
let h5 = document.createElement('h5')
let h3 = document.createElement('h3') //global variables
h3.append('I am being inserted as insertAdjacentElement')
h5.append('I am being inserted as insertAdjacentElement')
h1.insertAdjacentElement('beforeend', h5);
h1.insertAdjacentElement('afterend', h3);
 
