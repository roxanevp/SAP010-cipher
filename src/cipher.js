const encrypt = (value, offSet) => {

  const upperCaseValue = value.toUpperCase()
  let encrypted = ""

  for (let i = 0; i < upperCaseValue.length; i++) { 
      
      const charCode = upperCaseValue.charCodeAt(i)
      const formulaCipher = ((charCode - 64 + offSet) % 26) + 64
      const newChar = String.fromCharCode(formulaCipher)
      encrypted += newChar
  }

  return encrypted
};

const decrypt = (value, offSet) => {

  const upperCaseValue = value.toUpperCase()
  let encrypted = ""

  for (let i = 0; i < upperCaseValue.length; i++) { 
      
      const charCode = upperCaseValue.charCodeAt(i)
      const formulaCipher = ((charCode - 64 - offSet) % 26) + 64
      const newChar = String.fromCharCode(formulaCipher)
      encrypted += newChar
  }

  return encrypted
  

};

const cipher = {
  encrypt,
  decrypt,
};

export default cipher;
