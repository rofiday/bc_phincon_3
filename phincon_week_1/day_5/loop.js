/*for (let i = 1; i <= 10; i++) {
  console.log(i);
}
  silahkan buat perulangan yang menampilkan angka genap dari 20 sampai 40 dan dari 60 sampai 80
  debugging nampilkan angka 1 - 100
  lalu batasin 20 - 40 menggunakan kondisi
  if()
  setelah itu baru cari modulus dengan masukan kondisi ke dalam if
  show casenya adalah 
  melakukan satu pengulangan dan melakukan banyak kondisi
*/
/*
* 
let sum = 80;
for (let i = 20; i <= sum; i++) {
if (i <= 40 && i !== i >= 41 <= 59) {
console.log(i);
} else if (i >= 60 && i <= 80) {
console.log(i);
}
}

*/

// for (let i = 1; i <= 100; i++) {
//   if (i >= 20 && i <= 40) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
//   if (i >= 60 && i <= 80) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// }
// membuat pengulangan dengan function agar menjadi dinamis
function greadingScore(start, end, limit, type = "even") {
  for (let i = 1; i <= limit; i++) {
    if (i >= start && i <= end) {
      if (type === "even") {
        if (i % 2 === 0) {
          console.log(i);
        }
      } else if (type === "odd") {
        if (i % 2 !== 0) {
          console.log(i);
        }
      }
    }
  }
}

greadingScore(20, 40, 1000, "even");
