function last(str) {
    let words = str.split(' ');
  

    return words.sort((a, b) => {
      const lastCharA = a[a.length - 1];
      const lastCharB = b[b.length - 1];
  

      if (lastCharA < lastCharB) return -1;
      if (lastCharA > lastCharB) return 1;Ё
      return 0;
    });
  }
  