function targetTerdekat(arr) {
    var space = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'o') {
            space = 0;
        } else if (arr[i] == 'x') {
            space++;
            return space;
        } else {
            space++;
        }
    }
    return 0;
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); 
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); 
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); 
console.log(targetTerdekat([' ', ' ', 'o', ' '])); 
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x']));