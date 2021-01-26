// 1. Pastikan Teman Teman Sudah Menginstall Node JS

// 2. Teman - Teman Buatlah File di Folder javascript teman teman sebuah file dengan nama file tugas4.js

// 3. Buatlah Program Dengan Spesifikasi dibawah ini :

// Buatlah 3 buah variabel dengan yang berisi nilai tinggi badan siswa
// Setelah itu teman teman gunakanlah fungsi dari if else untuk mengetahui siswa yang memiliki tinggi badan tertinggi
// Setelah itu teman teman tampilkan hasilnya dari urutan yang tertinggi ke yang terpendek.

// 4. Happy Codding :)




function tinggiSiswa() {
    var cici = 178;
    var andriyan = 170;
    var dion = 175;

    if (cici > andriyan) {
        if (cici > dion) {
            console.log("tinggi cici adalah ", cici, ", cici adalah siswa tertinggi")
        } else {
            console.log("cici adalah siswa tertinggi ke dua")
        }
    } else {
        if (cici < dion) {
            console.log("cici adalah siswa terpendek")
        } else {
            console.log("cici adalah siswa terpendek ke dua")
        }
    }
}

tinggiSiswa();