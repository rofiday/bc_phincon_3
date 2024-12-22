// 26.hitung jumlah kombinasi
function faktorial(x) {
  if (x === 0 || x === 1) return 1;
  return x * faktorial(x - 1);
}

function countCombinasi(n, r) {
  return faktorial(n) / (faktorial(r) * faktorial(n - r));
}

// Ekspektasi hasil:
console.log(countCombinasi(5, 2)); // Output: 10
console.log(countCombinasi(10, 3)); // Output: 120
