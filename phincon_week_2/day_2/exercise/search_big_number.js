//17. cari bilangan ganjil terbesar
const searchBigNumber = (arr) => {
  let numberOdd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      numberOdd.push(arr[i]);
    }
  }
  return Math.max.apply(null, numberOdd);
};
console.log(searchBigNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 31, 32]));
