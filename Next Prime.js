function nextPrime(n){
    let count=0;
    for(let i=n+1;i>0;i++){
    if (isPrime(i)){count = i; break}
    }
     return count
  }
  
  function isPrime(n) {
    let rt = Math.sqrt(n);
    for(let i = 2; i <= rt; i++) {
      if(n % i === 0) return false; 
    }
    return n !== 1;
  }