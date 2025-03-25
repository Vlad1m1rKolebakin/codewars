function palindrome(num) {
    // Validate the input
    if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
        return "Not valid";
    }

    let numStr = num.toString();  // Convert number to string for easier substring manipulation

    // Check each possible substring for palindrome
    for (let length = 2; length <= numStr.length; length++) {
        for (let i = 0; i <= numStr.length - length; i++) {
            let subStr = numStr.slice(i, i + length);  // Get the substring
            if (subStr === subStr.split('').reverse().join('')) {  // Check if palindrome
                return true;  // Found a palindrome
            }
        }
    }

    // No palindromes found
    return false;
}
