//3. faktorial atau disebut function rekursif yaitu function yang memanggil dirinya sendiri sampai kondisi terpenuhi
/**
 * membuat function dengan parameter n
 * lalu membuat kondisi jika n bernilai 0 maka nilai yang dikembalikan adalah 1;
 * else nya adalah nilai dari n itu 1 * dengan function itu sendiri yang didalamnya adalah n - 1
 */
const countFaktorial = (n) => {
  if (n === 0) return 1;
  return n * countFaktorial(n - 1);
};
console.log(countFaktorial(5));
console.log(countFaktorial(0));
