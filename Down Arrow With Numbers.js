function getADownArrowOf(n) {
    if (n < 1) return '';  
 
     let result = [];
 
     for (let i = 0; i < n; i++) {
 
         let spaces = ' '.repeat(i);
         
 
         let firstPart = '';
         let secondPart = '';
 
         for (let j = 1; j <= (n - i); j++) {
             firstPart += (j % 10);  
         }
 
         for (let j = (n - i - 1); j >= 1; j--) {
             secondPart += (j % 10);  
         }
 
 
         result.push(spaces + firstPart + secondPart);
     }
 
 
     return result.join('\n');
 }