//1. Buatlah function untuk menghitung jumlah bilangan ganjil dari 1 hingga n.
/*
* let count untuk menampung nilai awal
* lalu lakukan pengulangan dan didalamnya diberikan kondisi i yang dimodulus 2 !== 0
  maka yang akan dilakukan adalah menambahkan nilai awal menjadi +1
sampai kondisi terpenuhi
jadi menghitung jumlah nilai ganjil yang ada pada saat pemanggilan function
*/
const countOutNumber = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return count;
};
console.log(countOutNumber(20));
