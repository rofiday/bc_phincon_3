/*
* 
const data = 150;
if (data > 100) {
  console.log("data lebih dari 100");
} else if (data < 100 && data > 50) {
  console.log("data kurang dari seratus dan lebih besar dari 50");
} else {
  console.log("data kurang dari 100");

*/
// }

// exercise
/* 
* buatlah function kondisi untuk menentukan nilai huruf dari angka yang diberikan dengan ketentuan sebagai berikut:


*/

/*
 *  kesalahan number tidak dijadikan sebagai parameter, 
parameter ini digunakan untuk menampung nilai dari ketentuan expression
    kesalah di kondisi terakhir dimana saya melakukan pengecekan nilai 0 <=
    bukan nilai 0 >=
    menggunakan return apabila hanya menampilkan \
    jika function mengembalikan nilai maka gunakan return dan console.log didalam function digunakan untuk debugging
    dan apabila kita menyimpan function ke dalam variable dan di salah satu kondisi ada console.log maka akan undifined karena tidak mengembalikan sebuah nilai.
 */
function scoreGrades(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 90) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 0 && score <= 59) {
    return "E";
  } else {
    return "BELAJARLAH KARENA KUADRAT MANUSIA BERHENTI BELAJAR JIKA SUDAH BERPINDAH DARI ALAM DUNIA.";
  }
}
const score = scoreGrades();
console.log(score);
