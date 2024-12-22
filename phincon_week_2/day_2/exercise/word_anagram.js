// 19.cek anagram
const wordAnagram = (sentence, word) => {
  let stringArr = sentence.split("");
  let stringArr2 = word.split("");
  let sorted = stringArr.toSorted();
  console.log(sorted);
  let sorted2 = stringArr2.toSorted();
  console.log(sorted2);
  let result = sorted.toString();
  let result2 = sorted2.toString();
  return result === result2;
};
console.log(wordAnagram("liten", "sile"));
