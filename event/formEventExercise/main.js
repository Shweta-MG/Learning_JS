let form = document.querySelector('form');
let inputProduct = document.querySelector('#product');
let inputQty = document.querySelector('#qty');
let list = document.querySelector('#list');

let submitForm = (e) => {
    e.preventDefault();
    let inputProductValue = inputProduct.value;
    let inputQtyValue = inputQty.value;

    let newLi = document.createElement('li');
    newLi.innerText = ` ${inputQtyValue} ${inputProductValue} `;

    list.appendChild(newLi);


    inputProduct.value = '';
    inputQty.value = '';

}

form.addEventListener('submit', submitForm);