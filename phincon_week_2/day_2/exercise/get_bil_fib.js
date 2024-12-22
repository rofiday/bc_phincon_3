// 13.membuat faktor bilangan yaitu bilangan yang yang habis jika dibagi dengan bilangan tersebut (i %2 === 0)
//output yang diminta berbentuk array maka inputannya adalah array kosoong
/*
* jadi inputannya adalah array kosong , kemudian pengulangan for terhadap value yang dikirim pada parameter, nah hasil dari ini kita modulus dari parameter yang dimasukan dengan banyaknya iterasi pada for. num % i === 0 (num menunjukan value parameter i iterasi)
contoh: num diberi nilai 12 lalu dalam pengulangan dimulai dari 1 jadi apakah 12 % 1 === 0
tidak maka 1 masuk sebagai output, lalu 12 % 2 === 0 tidak maka 2 masuk dan seterusnya.
*/
const getBilFac = (num) => {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      //kenapa di modulus i? karena parameter akan dibagi iterasi dari i
      result.push(i);
    }
  }
  return result;
};
console.log(getBilFac(12));
