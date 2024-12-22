//5.hitung jumlah digit
/*
* karena outputnya melakukan perhitungan secara berulang maka didalam function tersebut ada pengulangan
casenya adalah kita buat nilai defaultnya dulu yaitu let sum = 0
lalu number atau parameter kita ubah ke string untuk memudahkan iterasi / pengulangan
membuat pengulangan for in ke variable strNumber yaitu number yang telah dikovert ke string
lalu variable nilai default kita assign dengan mengubah string menjadi number lagi dengan method parseInt() parameter yang dimasukan adalah strNumber[i] dari index ke i
*/
const getSumDigit = (number) => {
  let sum = 0;
  let strNumber = number.toString();
  for (let i in strNumber) {
    sum += parseInt(strNumber[i]);
  }
  return sum;
};
console.log(getSumDigit(12345));
console.log(getSumDigit(9876));
