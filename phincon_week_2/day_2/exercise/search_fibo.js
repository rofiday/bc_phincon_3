//8.cari bilangan fibonacci
/*
 *membuat function dengan parameter n
  lalu membuat kondisi jika n <= 0 maka return []
  dan jika n === 1 maka return [0]
  buat variable untuk menjalankan rumus fibonanci yaitu (n - 1) + (n-2)
  menggunakan pengulangan karena  outputnya berisikan array
  method push dan masukan rumus
  lalu direturn
  menggunakan nilai yang akan dimulai yaitu dua karena 1 bukan bilangan prima
 */
const searchFibonacci = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  let fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]); //rumus fibonaci
  }
  return fibonacci;
};
// console.log(searchFibonacci(10));
