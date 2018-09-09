function angkaPalindrome(num) {
    var str = String(num);
    var i = 0;
    var j = str.length - 1;
    while (i < str.length) {
        if (num < 9) {
            return num + 1;
        } else if (str[i] === str[j]) {
            i++;
            j--;
        } else {
            num += 1;
            i = 0;
            j = str.length - 1;
            str = String(num);
        }
    }
    return num;
}

console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(117));
console.log(angkaPalindrome(175));
console.log(angkaPalindrome(1000)); 