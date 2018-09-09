
function cariMean(arr) {
    var num = 0
    var mean;
    for (var i = 0; i < arr.length; i++) {
        num += arr[i];
    }
    mean = num / arr.length;
    mean2 = mean - Math.floor(mean);
    if (mean2 > 0.4) {
        return Math.ceil(mean);
    } else {
        return Math.floor(mean);
    }
}


console.log(cariMean([1, 2, 3, 4, 5]));
console.log(cariMean([3, 5, 7, 5, 3]));
console.log(cariMean([6, 5, 4, 7, 3]));
console.log(cariMean([1, 3, 3]));
console.log(cariMean([7, 7, 7, 7, 7])); 