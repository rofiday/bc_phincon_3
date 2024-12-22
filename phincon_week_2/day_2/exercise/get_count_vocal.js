//12, menghitung huruf vokal
const getCountVocal = (arr) => {
  let newArray = [];
  let result = arr.split(""); // separator menentukan pemisah
  for (let i = 0; i < result.length; i++) {
    if (
      result[i] === "a" ||
      result[i] === "i" ||
      result[i] === "u" ||
      result[i] === "e" ||
      result[i] === "o"
    ) {
      newArray.push(result[i]);
    }
  }
  return newArray.length;
};
console.log(getCountVocal("aiueo"));
