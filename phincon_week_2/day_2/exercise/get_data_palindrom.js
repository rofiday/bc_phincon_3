//6.cek Palindrom
/*
* buat function dengan parameter sentance
declare variable dengan assign array kosong untuk menampung ketika data dipush
declare variable untuk mengubah string menjadi array dengan method .split("") tanpa separator
lalu buat pengulangan dengan decrement yaitu kondisi sebaliknya varible diisi length data dan kondisinya >= 0
lalu push data tersebut ke variable array dengan index[i]
lalu di return dan di join untuk menggabungkan array
dan dijalankan function 
*/

const getDataPalindrom = (sentance) => {
  let newArray = [];
  let text = sentance.split("");
  for (let i = text.length; i >= 0; i--) {
    newArray.push(text[i]);
  }
  return newArray.join("") === sentance;
};
console.log(getDataPalindrom("malam"));
