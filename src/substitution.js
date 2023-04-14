const substitutionModule = (function () {
  
const orderAlph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  function substitution(input, alphabet, encode = true) {
 
    if (!alphabet || alphabet.length !== 26) {
      return false
    }

  let cipher = alphabet.toLowerCase().split("")
    let duplicate = cipher.some((char, index, arr) => {
      return arr.lastIndexOf(char) !== index
    })
    if (duplicate) {
      return false
    }

    //find where in alphabet is indexOf each letter
    
    let inputArray = input.split("")
    let findIndex = []
 if (encode === true) {
    findIndex = inputArray.map((letter) => {
      let letterInd = orderAlph.indexOf(letter)
      if (letterInd === -1) {
        return letter
      } else {
        return cipher[letterInd]
      }
    })
    } else {
      findIndex = inputArray.map((letter) => {
        let ind = cipher.indexOf(letter)
        if (ind === -1) {
          return letter
        } else {
        return orderAlph[ind]
        }
      })
    }

  return findIndex.join("")

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
