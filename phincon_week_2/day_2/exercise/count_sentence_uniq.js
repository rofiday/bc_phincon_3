// 23.hitung jumlah kata unik sama dengan no 15
const countSentenceUniq = (sentence) => {
  let newArray = [];
  let result = sentence.split(" ");
  for (let i = 0; i < result.length; i++) {
    if (!newArray.includes(result[i])) {
      newArray.push(result[i]);
    }
  }
  return newArray.length;
};
console.log(
  countSentenceUniq("saya suka makan nasi saya suka minum air dan kopi")
);
