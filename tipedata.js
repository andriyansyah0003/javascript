// if else berdasarkan tipe data
function tipeData() {
    var data = '2';
    console.log(typeof (data));


    if (data == 2) {
        return 'success';
    } else {
        return 'gagal';
    }
}

console.log(tipeData());