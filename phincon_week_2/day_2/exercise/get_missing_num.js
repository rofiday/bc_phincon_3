// 21.cari bilangan yang hilang
function getMissingNumber(arr) {
  // Tulis kode di sini
  let n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;
  console.log(sum);
  let totalArr = arr.reduce((acc, num) => acc + num, 0);
  console.log(totalArr);
  return sum - totalArr;
}

console.log(getMissingNumber([1, 2, 3, 5, 6, 7]));

// Ekspektasi hasil:
// cariBilanganHilang([1, 2, 3, 5, 6, 7]) => 4

//loop array string object
