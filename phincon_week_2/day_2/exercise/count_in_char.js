// 25.hitung kemunculan karakter
const countInChar = (str) => {
  const frekuensi = {};
  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    if (frekuensi[character]) {
      frekuensi[character]++;
    } else {
      frekuensi[character] = 1;
    }
  }
  return frekuensi;
};
console.log(countInChar("Hello World"));
