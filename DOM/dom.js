document.querySelector('h1').innerText = 'I am updated inner text';
document.querySelector('#about').innerHTML += '<h3> I am updated inned adjacent element </h3> <sup>I am testing</sup>'


//change the id (attribute) using DOM
document.querySelector('#contact').id = 'contact-details';


//create element than append it
let h4 = document.createElement('h4')
h4.innerText = 'I am being appended';
let h2 = document.querySelector('.section-title')
h2.appendChild(h4)


