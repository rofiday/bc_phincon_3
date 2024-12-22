// 22.hitung jumlah hari dalam satu tahun
/*
* langkah yang pertama  karena berkaitan dengan tgl,bulan,tahun maka menggunakan method date
  dalam function memiliki 2 parameter, untuk menampung masing-masing method new Date
  setelah itu kita dapatkan waktu dengan cara .getTime() === new Date().getTime lalu dikurangi dari date2- date1 agar hasilnya tidak minus
  setelah itu masukan rumus untuk mendapatkan hari dengan cara : (1000/3600*24)
  dari 1 menit di convert ke milidetik = 1000ms 
  dari 1 jam di convert ke detik = 3600s
  24 itu didapat dari 1 = 24jam
*/
const countDateDay = (date1, date2) => {
  let dateDay1 = new Date(date1);
  let dateDay2 = new Date(date2);
  let timeDiff = dateDay2.getTime() - dateDay1.getTime(); //getTime => get Day
  let dayDiff = timeDiff / (1000 * 3600 * 24);
  return dayDiff;
};
console.log(countDateDay("2023-01-01", "2023-12-31"));
