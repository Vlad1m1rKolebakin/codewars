function elimination(arr){
    return arr.sort((a,b)=>a-b).filter((v,i,arr)=>arr[i]===arr[i+1])*1 || null
  }





  


//   console.log(elimination([1,2,3,4,5,1]));
//   function elimination(arr) {
//     // Создаем пустое множество для хранения уникальных чисел
//     const seen = new Set();
    
//     // Перебираем все элементы массива
//     for (let num of arr) {
//       // Если число уже встречалось, это и есть наш дубликат
//       if (seen.has(num)) {
//         return num;
//       }
//       // Если числа еще не было, добавляем его в множество
//       seen.add(num);
//     }
    
//     // Если не нашли дубликатов, возвращаем null
//     return null;
//   }
  
