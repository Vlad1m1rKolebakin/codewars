// Character Concatenation



function charConcat(string){
    let str=string.split('');
    
    let arr=[];
    for (let i=1;i<=str.length/2;i++){
    arr.push(str[i-1])
     arr.push(str[str.length-i])
        arr.push(i)
    }
    return arr.join('')
  }
  
