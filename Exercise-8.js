function pasanganTerbesar(num) {
    var i = 0;
    var j = i + 2;
    var banding1 = String(num);
    var banding2 = 0;
    var banding3 = 0;
    while (j<=banding1.length) {
      banding2 = Number(banding1.slice(i, j));
      if (banding3 < banding2)
        banding3 = banding2;
      i++;
      j++;
    }
    return banding3;
  }
  

console.log(pasanganTerbesar(641573)); 
console.log(pasanganTerbesar(12783456)); 
console.log(pasanganTerbesar(910233)); 
console.log(pasanganTerbesar(71856421)); 
console.log(pasanganTerbesar(79918293));