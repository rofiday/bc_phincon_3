/*
 * Kapital String
  -kesalahan tidak dibuat secara dinamis sebagai parameter
 */
const capitalFunc = (word) => {
  // let word = "Cobain dulu aja gagal belakangan";
  let result = word.toUpperCase();
  return result;
};
// console.log(capitalFunc("tes"));

/*
 * menerima sebuah string dan mengembalikan nilai vokal (a,i,u,e,o)

 */
const vocal = () => {
  let newArray = [];
  let arr = "hello world";
  let result = arr.split("");
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
// console.log(vocal());
/*
 * 3. mengembalikan nilai kalimat terpanjang
  *array pasti bisa di looping 
  membuat parameter lalu displit agar menghasilkan array
  declare nilai max 
  pahami splitt
 */

const getLongestCharacter = (sentence) => {
  let result = sentence.split(" ");
  let max = 0;
  for (let i = 0; i < result.length; i++) {
    if (max < result[i].length) {
      max = result[i].length;
    }
  }
  return max;
};
// console.log(getLongestCharacter("saya ingin meminjam buku perkembangbiakan"));
// const getSmallCharacter = (sentence) => {
//   let result = sentence.split(" ");
//   let min = 0;
// };
/*
 * membuat function untuk mengecek apakah string palindrome (dibaca sama dari depan dan belakang)
 */
const textPalindrome = (sentence) => {
  let newArray = [];
  let text = sentence.split("");
  for (let i = text.length - 1; i >= 0; i--) {
    newArray.push(text[i]);
  }
  return newArray.join("") === sentence;
};
// console.log(textPalindrome("phincon"));
/*
 *  Intermediate 1

 */

const whiteSpace = (sentence) => {
  let result = sentence.trim();
  // console.log(resultBackspace);
  return result;
};
// console.log(whiteSpace("     Hello World    "));

/*
 * mengembalikan kata
 */
const reserveSentence = (sentence) => {
  let newArray = [];
  let reverseWord = sentence.split(" ");
  console.log(reverseWord);
  for (let i = reverseWord.length - 1; i >= 0; i--) {
    newArray.push(reverseWord[i]);
  }
  return newArray.join(" ");
};
// console.log(reserveSentence("Hello World"));

/*
 * menghitung berapa kali sebuah kata muncul dalam kalimat
 */
const searchWordInline = (sentence, word) => {
  // let regInsensitive = /w3school/i;
  let pattern = new RegExp(word, "gi");
  let result = sentence.match(pattern);
  return result ? result.length : 0;
};
console.log(searchWordInline("tes tes Lagi", ""));
