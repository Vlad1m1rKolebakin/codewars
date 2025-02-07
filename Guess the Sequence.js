function sequence(x) {
    return Array.from({ length: x }, (_, i) => i + 1)
      .map(String)
      .sort()
      .map(Number);
  }
  
  
  console.log(guessSequence(9));
  