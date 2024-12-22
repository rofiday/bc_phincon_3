//16. menghitung jumlah kata yang sama
const getSumWord = (sentence, word) => {
  let counter = 0;
  let result = sentence.split(" ");
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    if (result[i] === word) {
      counter++;
    }
  }
  return counter;
};
console.log(
  getSumWord("saya suka makan nasi, saya juga suka minum air", "suka")
);
