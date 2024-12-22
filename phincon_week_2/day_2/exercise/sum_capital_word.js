//20. menghitung jumlah kapital pada sebuah kalimat
const sumCapitalWord = (sentence) => {
  let counterCapital = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] >= "A" && sentence[i] <= "Z") {
      counterCapital++;
    }
  }
  return counterCapital;
};
console.log(sumCapitalWord("Saya Belajar JavaScript Di DICODING"));
