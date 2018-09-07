var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2(arr) {
    arr.splice(1, 1, "Roman Alamsyah Elsharawy")
    arr.splice(4, 1, "Pria", "SMA Internasional Metro")
    console.log(arr)
    var tanggal = arr[3]
    var bulan = tanggal.split("/")
    switch (bulan[1]) {
        case 01:
            console.log('Januari')
            break;
        case 02:
            console.log('Februari')
            break;
        case 03:
            console.log('Maret')
            break;
        case 04:
            console.log('April')
            break;
        case 05:
            console.log('Mei')
            break;
        case 06:
            console.log('Juni')
            break;
        case 07:
            console.log('Juli')
            break;
        case 08:
            console.log('Agustus')
            break;
        case 09:
            console.log('September')
            break;
        case 10:
            console.log('Oktober')
            break;
        case 11:
            console.log('Novemeber')
            break;
        case 12:
            console.log('Desember')
            break;
            Default:
            break;
    }
    for (var i = 0; i < bulan.length; i++) {
        bulan[i] = Number(bulan[i]);
    }
    tanggal = bulan.join('-');
    bulan.sort(function (value1, value2) { return value1 < value2 });
    console.log(bulan);
    console.log(tanggal);
    var nama = arr[1].slice(0, 15);
    console.log(nama);
}

dataHandling2(input);
