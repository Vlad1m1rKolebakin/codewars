function getMinMax(arr){
    let result = []
    let minResult = Math.min(...arr)
    let maxResult = Math.max(...arr)
    result.push(minResult)
    result.push(maxResult)
    return result
};

