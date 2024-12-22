//2.Buatlah function untuk mengecek apakah suatu tahun adalah tahun kabisat.
/*
 *membuat function dengan parameter year
  tahun kabisat adalah tahun yang dimana jika dibagi 4 akan habis
  lalu membuat sebuah kondisi year % 4 === 0 artinya jika tahun yang dimasukan ke dalam argument habis jika di sisa bagi %4 maka tahun tersebut disebut kabisat
  casenya adalah year di modulus %4
 */
const getLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(getLeapYear(2004));
console.log(getLeapYear(2003));
console.log(getLeapYear(2008));
