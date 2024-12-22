//4.bilangan prima
/* 
* dimulai dari 2 karena 1 bukan dari bilangan prima
rules :
declare  variable untuk menampung array kosong

 */
const getPrimeBil = (number) => {
  let prime = [];
  for (let i = 2; i < number; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      prime.push(i);
    }
  }
  return prime;
};
console.log(getPrimeBil(20));
