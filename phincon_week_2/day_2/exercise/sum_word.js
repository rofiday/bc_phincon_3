//15. menghitung jumlah kata unik
const sumWord = (sentence) => {
  let newArray = [];
  let result = sentence.split("");
  for (let i = 0; i < result.length; i++) {
    if (!newArray.includes(result[i])) {
      newArray.push(result[i]);
    }
  }
  return newArray.length;
};
sumWord("hello world");
