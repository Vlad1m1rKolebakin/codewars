function sortIt(str, n) {

    const words = str.split(', ').map(word => word.trim());
  

    words.sort((a, b) => {

      const letterA = a[n - 1].toLowerCase();
      const letterB = b[n - 1].toLowerCase();
      
      if (letterA === letterB) {

        return a.toLowerCase().localeCompare(b.toLowerCase());
      }
      

      return letterA.localeCompare(letterB);
    });
  

    return words.join(', ');
  }
  
  console.log(sortIt('bid, zag', 2)); 