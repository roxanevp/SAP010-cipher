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

  const value = event.target.value
  const result = document.querySelector("#result")

  if(activeTab === "tabCripto"){
    const encrypted = cipher.encode(offSetValue, value); 
    result.innerHTML = encrypted 
  } else {
    const decrypted = cipher.decode(offSetValue, value); 
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
  if (activeTab !== tabId) {
    activeTab = tabId

    const result = document.querySelector("#result").innerHTML.toString()
    message.value = result
    messageChange({ target: { value: result } })

  } 

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
