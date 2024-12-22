// 24. mencari bilangan yang muncul satu kali
const getNumberNotLoop = (arr) => {
  let frekuensi = {};
  for (let i = 0; i < arr.length; i++) {
    // console.log(result[i]);
    if (frekuensi[arr[i]]) {
      frekuensi[arr[i]]++;
    } else {
      frekuensi[arr[i]] = 1;
    }
  }
  const hasil = [];
  for (let key in frekuensi) {
    if (frekuensi[key] === 1) {
      hasil.push(Number(key));
    }
  }
  return hasil;
};
console.log(getNumberNotLoop([1, 2, 2, 3, 3, 4, 5, 5]));
