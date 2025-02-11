function solution(str, ending){
    if(ending === '') return true
        if(str.slice(-ending.length) === ending){
          return true
        }else {
          return false
        }
  }