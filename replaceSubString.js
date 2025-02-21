function replaceSubString(str, search, replace){
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + search.length) === search) {
            result += replace;
            i += search.length - 1;
        } else {
            result += str[i];
        }
        
    }
    return result

}

console.log(replaceSubString('hello word', 'word', 'three'));
console.log(replaceSubString('abc abc abc', 'abc', '123'));



// function replaceSubString(str, search, replace){
//     return str.split(search).join(replace);
 
// }

// console.log(replaceSubString('hello word', 'word', 'three'));
// console.log(replaceSubString('abc abc abc', 'abc', '123'));

