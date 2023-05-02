import cipher from './cipher.js';

let offSetValue = 3

const closeButton = document.querySelector("#close");
closeButton.onclick = function(){
    const frame = document.querySelector("#frame");
    frame.classList.add("hide");
}


const message = document.querySelector('#message');
message.addEventListener('input', messageChange);


function messageChange(event){
    console.log(event.target.value)

    const value = event.target.value
    const result = document.querySelector("#result")
    const encrypted = cipher.encrypt(value, offSetValue); 
    result.innerHTML = encrypted 
}


const tabCripto = document.querySelector("#tabCripto");
const tabDecripto = document.querySelector("#tabDecripto");
const toggletab = (event) => {
    tabCripto.classList.remove("active")
    tabDecripto.classList.remove("active")

    const actualtab = event.target
    actualtab.classList.add("active")
}

tabCripto.onclick = toggletab;
tabDecripto.onclick = toggletab;


const shiftNumber = document.querySelector("#shiftNumber");


function updateOffSet(event) {
    const value = event.target.value
    offSetValue = Number(value)
    
    const messageValue = message.value
    messageChange({ target: { value: messageValue } })
}

shiftNumber.onchange = updateOffSet 
