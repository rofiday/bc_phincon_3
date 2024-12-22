//10, nilai terbesar dalam array
/*
 * menggunakan method array sorting yaitu Math.max.apply(null,arr)
 */
const getMaxData = (arr) => {
  return Math.max.apply(null, arr);
};
console.log(getMaxData([3, 7, 2, 9, 1])); //9
