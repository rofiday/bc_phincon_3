/**
 * jika menggunakan function untuk descructuring maka ditempatkan di parameter function tersebut contoh untuk destructuring name pada object student caranya seperti berikut:
 * const calculatetotal = ({name}, ...scores) => {})
 *
 * IDENTIFIKASI MASALAH : MEMBUAT FUNCTION CALCULATETOTAL()DENGAN PARAMETER NAME DAN ARRAY OF SCORE PADA OBJECT
 * menggunakan rest parameter untuk mengambil data sisa karena student di assign kedalam object maka rest parameter mengambil key yang ada di object
 *
 */

const student = {
  name: "Alice",
  score: [90, 80, 70, 40],
};

const calculateTotal = (student) => {
  const { name, score } = student;
  // penjumlahan pada array bisa menggunakan method reduce((callback) => total+value)
  const sumScore = score.reduce((acc, score) => acc + score);
  return `Name : ${name}, score:${sumScore}`;
};
const total = calculateTotal(student);
console.log(total);

// const studentTwo = {
//   name: "Bob",
//   score: [90, 80, 70, 40],
// };
// const getDataStudentTwo = (name, score) => {
//   // const { name, score } = studentTwo;
//   console.log(name);
//   console.log(score);
// };
// getDataStudentTwo(studentTwo.name, studentTwo.score);

//soal buat sebuah function bernama calculateTotal yang menerima parameter pertama berupa string name(nama siswa) dan parameter kedua berupa array angka yang mewakili
