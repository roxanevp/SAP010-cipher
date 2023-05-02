import cipher from './cipher.js';

let offSetValue = 3
let activeTab = "tabCripto"

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

    if(activeTab === "tabCripto"){
        const encrypted = cipher.encrypt(value, offSetValue); 
        result.innerHTML = encrypted 
    } else {
        const decrypted = cipher.decrypt(value, offSetValue); 
        result.innerHTML = decrypted
    }
}


const tabCripto = document.querySelector("#tabCripto");
const tabDecripto = document.querySelector("#tabDecripto");
const toggletab = (event) => {
    tabCripto.classList.remove("active")
    tabDecripto.classList.remove("active")

    const actualtab = event.target
    actualtab.classList.add("active")

    const tabId = event.srcElement.id
    activeTab = tabId
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
