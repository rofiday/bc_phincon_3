//14. konversi suhu  dari F to C(suhu - 32) / 1.8
//14. konversi suhu  dari C to F(9 / 5) * suhu + 32
// inputannya adalah parameter
// outputnya hasil dari pembagian konversi suhu dari C to F atau sebaliknya
const convertSuhu = (suhu, type) => {
  let result = 0;
  if (type === "C") {
    result = (9 / 5) * suhu + 32;
    console.log("Fahrenheit");
  } else if (type === "F") {
    result = (5 / 9) * (suhu - 32);
    console.log("Celcius");
  }
  return result;
};
console.log(convertSuhu(30, "C"));
console.log(convertSuhu(86, "F"));
