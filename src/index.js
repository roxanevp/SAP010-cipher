import cipher from './cipher.js';

console.log(cipher);

const closeButton = document.querySelector("#close");
closeButton.onclick = function() {
    const frame = document.querySelector("#frame");
    frame.classList.add("hide");
}