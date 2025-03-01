
function add(n) {
    return function(b){
      return n + b
    }
  }
  
  let addOne = add(1)
  
  
  console.log(addOne(3));
  
  
  
  
  