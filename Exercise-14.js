function mengelompokkanAngka(arr) {
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    var arr4 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0) {
            arr3.push(arr[i]);
        } else if (arr[i] % 2 == 0) {
            arr1.push(arr[i]);
        } else {
            arr2.push(arr[i]);
        }
    }
    arr4.push(arr1);
    arr4.push(arr2);
    arr4.push(arr3);
    return arr4;
}


console.log(mengelompokkanAngka([2, 4, 6]));
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(mengelompokkanAngka([100, 151, 122, 99, 111]));
console.log(mengelompokkanAngka([])); 