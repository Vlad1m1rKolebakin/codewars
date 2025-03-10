function evenOrOdd(str) {
    let sumEven = str.split('').reduce((acc, el ,i) => {
        if(+el %2 === 0){
                acc += +el
            
        }
        return acc
    }, 0)
    
    let sumOdd =  str.split('').reduce((acc, el ,i) => {
        if(+el %2 !== 0){
                acc += +el
            
        }
        return acc
    }, 0)

    if(sumEven > sumOdd) {
        return "Even is greater than Odd"
    }
    if(sumOdd > sumEven) {
        return "Odd is greater than Even"
    }
    if(sumEven === sumOdd) {
        return "Even and Odd are the same"
    }


}
