// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  /*const letters = {a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26}*/
  const letters = {1:"a", 2:"b", 3:"c", 4:"d", 5:"e", 6:"f", 7:"g", 8:"h", 9:"i", 10:"j", 11:"k", 12:"l", 13:"m", 14:"n", 15:"o", 16:"p", 17:"q", 18:"r", 19:"s", 20:"t", 21:"u", 22:"v", 23:"w", 24:"x", 25:"y", 26:"z"}
 function caesar(input, shift, encode = true) {
    // your solution code here
  if (!shift || shift === 0 || shift < -25 || shift > 25) {
    return false
  } else {
    //turn input into numbers
    let charNumber = []
    for (let i = 0; i < input.length; i++) {
      //if character is a letter      console.log(input[i])
      //console.log(input[i].toUpperCase().charCodeAt(0))
      if (input[i].toUpperCase().charCodeAt(0) > 64 && input[i].toUpperCase().charCodeAt(0) < 91) {
      charNumber.push(input[i].toUpperCase().charCodeAt(0))
      } else charNumber.push(input[i])
      //if it's not a letter push it as is
    }
    //turn the large charCode number into a number in letters object with shift
    const arrayNumber = []
    if (encode == true) {
    charNumber.forEach((number) => {
      if (number > 64 && number < 91) { 
      arrayNumber.push(number-64+shift)
      } else arrayNumber.push(number)
    }) } else { //for decoding
       charNumber.forEach((number) => {
      if (number > 64 && number < 91) { 
      arrayNumber.push(number-64-shift)
      } else arrayNumber.push(number)
    })}
                          
    //handle numbers over 26 and under 1
    const shifted = arrayNumber.map((item) => {
      if (!isNaN(item) && item !== ' ') {
      if (item > 26) {
        item = item-26
      } else if (item <= 0) {//still doesn't change 0 to z
        item = item+26
      } 
      }
      return item
    })
    //turn the numbers into a letters array
 let arrayLetter = shifted.reduce((acc, letter) => {
   if (letter == " " || letter == ".") {
   acc += letter
   } else if (letter == 0) {
     acc += "z"
   } else acc += letters[letter]
   return acc
 }, [])

    return arrayLetter

  } 
} 

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
