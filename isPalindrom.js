// function isPalindrom(str) {
// return str.toLowerCase().replace(/[,\s]/g, "") ===
//  str.toLowerCase().replace(/[,\s]/g, "").split('').reverse().join('')

// }

// console.log(isPalindrom("A man, a plan, a canal, Panama"));
// console.log(isPalindrom('Hell , o'));

function isPalindrom(str) {
    debugger;
    let cleanedStr = str.toLowerCase().replace(/[,\s]/g, "");
    for (let i = 0; Math.floor(cleanedStr.length / 2); i++) {
      if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
        return false;
      }
      return true;
    }
  }
  
  console.log(isPalindrom("A man, a plan, a canal, Panama"));
  console.log(isPalindrom("Hell , o"));
  