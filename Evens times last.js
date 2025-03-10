function evenLast(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        sum += numbers[i];
      }
    }
    return sum * numbers[numbers.length - 1];
  }


  console.log(evenLast([2, 3, 4, 5]));



function sumEvenIndexedTimesLast(arr) {
    // If the array is empty, return 0
    if (arr.length === 0) {
      return 0;
    }
  
    // Get the sum of elements at even indices
    const sumEvenIndexes = arr.reduce((sum, current, index) => {
      if (index % 2 === 0) {
        return sum + current;
      }
      return sum;
    }, 0);
  
    // Multiply the sum by the last element in the array
    return sumEvenIndexes * arr[arr.length - 1];
  }
  