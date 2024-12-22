// 18.menjumlahkan bilangan genap pada bilangan
const getCountBilEven = (number) => {
  let convertNumberToString = String(number);
  let convertStringToArr = convertNumberToString.split("");
  let bilEven = 0;
  for (let i = 0; i < convertStringToArr.length; i++) {
    console.log(convertStringToArr[i]);
    if (convertStringToArr[i] % 2 == 0) {
      bilEven++;
    }
  }
};

getCountBilEven(12345678);
