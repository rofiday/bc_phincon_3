//11. mencari nilai rata-rata
//input array yang berisi angka
//output mencari nilai rata-rata dari isi array dengan cara :
//total array / panjang dari element array
const getSumValue = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let result = total / arr.length;
  return result;
};
// console.log(getSumValue([1, 2, 3, 4, 5]));
