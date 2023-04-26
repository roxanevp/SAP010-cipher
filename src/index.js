import cipher from './cipher.js';

console.log(cipher);

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
    result.innerHTML = value
}