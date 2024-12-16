// const student = {
//   name: "jhon doe",
//   age: 20,
//   address: {
//     street: "Jalan raya",
//     city: "Jakarta",
//   },
//   hobbies: ["coding", "coding", "coding"],
//   "?height": 175,
//   getId: function () {
//     return 1;
//   },
//   sum: function (a, b) {
//     return a + b;
//   },
//   substract: (a, b) => {
//     return a - b;
//   },
// };
// student.gender = "male";
// student["phone"] = "087766777788";
// student["/weight"] = 64;
// const keys .keys
// const value .values
// console.log(student);
// console.log(student.getId(10, 10));
// console.log(student.sum(10, 10));
// console.log(student.substract(10, 10));

const attributes = {
  color: "red",
  backgroundColor: "black",
  fontSize: "16px",
};
for (let key in attributes) {
  //pengulangan untuk mendapatkan key dari object
  // console.log(key);
  //perulangan untuk mendapatkan value dari object
  console.log(attributes[key]);
}
