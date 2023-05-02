const encode = (offSet, value) => {

  const upperCaseValue = value.toUpperCase()
  let encrypted = ""

  for (let i = 0; i < upperCaseValue.length; i++) { 
      
    const charCode = upperCaseValue.charCodeAt(i)
    const actualOffset = offSet % 26
    const newPosition = (charCode - 64 + actualOffset) % 26
    const formulaCipher = newPosition === 0 ? 90 : newPosition + 64
    const newChar = String.fromCharCode(formulaCipher)
    encrypted += newChar
  }

  return encrypted
};

const decode = (offSet, value) => {

  const upperCaseValue = value.toUpperCase()
  let encrypted = ""
  let actualOffset = offSet * -1

  while (actualOffset < 0) {
    actualOffset += 26
  }

  for (let i = 0; i < upperCaseValue.length; i++) { 
    
    const charCode = upperCaseValue.charCodeAt(i)
    const newPosition = (charCode - 64 + actualOffset) % 26
    const formulaCipher = newPosition === 0 ? 90 : newPosition + 64
    const newChar = String.fromCharCode(formulaCipher)
    encrypted += newChar
  }

  return encrypted
  

};

const cipher = {
  encode,
  decode,
};

export default cipher;
