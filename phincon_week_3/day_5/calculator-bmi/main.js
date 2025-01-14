document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  const result = document.querySelector(".result");
  const heightValue = document.querySelector(".height");
  const weightValue = document.querySelector(".weight");
  let height = heightValue.value / 100;
  let weight = weightValue.value;
  let bmi = Math.round(weight / (height * height));
  result.innerHTML = `Hasil BMI dari ${height}CM dan ${weight}KG adalah ${bmi}`;
});
/*
* 
console.log("button diklik");
console.log(result);
console.log(height);
console.log(weight);
console.log(bmi);
*/
