//9.hitung jumlah kata
const sumText = (word) => {
  if (word.length === 0) return 0;
  const words = word.trim().split(" ");
  return words.length;
};
console.log(sumText("tes tes tes"));
