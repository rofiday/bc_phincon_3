/**
 * membuat program untuk mendeteksi bilangan prima menggunakan lodash
 * 1.membuat function untuk mengecek bilangan ganji atau genap
 * bilangan yang dia=mana hnya bisa dibagi dengan 1 dan dirinya sendiri
 * yang menghasilkan pembagian dari dirinya sendiri karena tidak ada bilangan lain yang menghasilkan dirinnya sendiri
 */
const _ = require("lodash");
function getPrimeNumbers(numbers) {
  return _.filter(numbers, isPrime);
}
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
const numbers = _.range(1, 20);
const primes = getPrimeNumbers(numbers);
console.log(primes);
