const textOne = "JavaScript is fun!"; //ubah menjadi huruf kecil semua (.toLoweCase)
const resultOne = textOne.toLowerCase();
console.log(resultOne);
const textTwo = "hello, world!"; // ubah jadi huruf besar semua(.toUpperCase)
const resultTwo = textTwo.toUpperCase();
console.log(resultTwo);
const textThree = "WELCOME to the Jungle"; // ambil kata jungle ubah jadi huruf kecil(.slice && .toLoweCase)
const resultThree = textThree.slice(15, 21).toLowerCase();
console.log(resultThree);
const firstName = "Jhon"; //gabung menjadi satu kata (.concat)
const lastName = "Doe";
const fullName = firstName.concat(" ", lastName);
console.log(fullName);
const textFour = "I love JavaScript programming"; //ambil js
const resultFour = textFour.substring(7, 17);
console.log(resultFour);
const textFive = "    Trim this string!    "; //hapus whitespace
const textFiveLenght = textFive.length;
const resultFive = textFive.trim().length;
console.log(textFiveLenght);
console.log(resultFive);

const name = "rofi";
const gender = "Male";
const sentance = `Hello, My name is ${name}, and I'm a ${gender}`;
console.log(sentance);
