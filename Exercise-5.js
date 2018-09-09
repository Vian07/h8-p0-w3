function palindrome(kata) {
    let i = 0;
    let j = kata.length - 1;
    while (i < kata.length) {
        if (kata[i] === kata[j]) {
            i++;
            j--;
        } else {
            return false;
        }
        return true;
    }
}


console.log(palindrome('katak'));
console.log(palindrome('blanket')); 
console.log(palindrome('civic')); 
console.log(palindrome('kasur rusak')); 
console.log(palindrome('mister'));