function lottery(str){
    //your code is here...
    if(/\d/.test(str)){
        let numbers =  str.match(/\d+/g).join('').split('')
        return [...new Set(numbers)].join('')

    }else {
        return "One more run!"
    }

}