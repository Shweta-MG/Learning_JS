const btn = document.querySelector('.btn_first');

btn.onclick = () => {
    console.log('You clicked me!!!')
    console.log('I hope it!!!') 
}



const btn_mouseover = document.querySelector('.btn_mouseover')
const mouse = () => {
    console.log('You triggered with enter button!!')
}
btn_mouseover.onmouseover  = mouse;
