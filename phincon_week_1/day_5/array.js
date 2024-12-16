const fruits = ["apple", 12, true, null, "student"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

// jika fruit[index] maka yang akan di loop adalah isinya
// namun jika hanya index maka akan me loop index dari array tersebut
for (let index in fruits) {
  console.log(fruits[index]);
}

const numbers = [5, 6, 7, 8, 9, 10];
numbers.forEach((value, index, array) => {
  console.log(value + " mempunyai index ke : " + index);
});
