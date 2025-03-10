function last(str) {
    // Split the string into an array of words
    let words = str.split(' ');
  
    // Sort words based on their last character
    return words.sort((a, b) => {
      const lastCharA = a[a.length - 1]; // last character of word a
      const lastCharB = b[b.length - 1]; // last character of word b
  
      // Compare last characters
      if (lastCharA < lastCharB) return -1;
      if (lastCharA > lastCharB) return 1;
      return 0; // If last characters are equal, maintain the original order
    });
  }
  