
//Building Strings From a Hash


function solution(pairs){
    return Object.entries(pairs)
         .map(([key, value]) => `${key} = ${value}`)
         .join(',');
  }