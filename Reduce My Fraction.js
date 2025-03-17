
function reduce(fraction) {
    // Helper function to calculate the greatest common divisor (GCD)
    function gcd(a, b) {
      while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    }
  
    const numerator = fraction[0];
    const denominator = fraction[1];
  
    // Find the GCD of numerator and denominator
    const commonDivisor = gcd(numerator, denominator);
  
    // Return the fraction in reduced form
    return [numerator / commonDivisor, denominator / commonDivisor];
  }
  