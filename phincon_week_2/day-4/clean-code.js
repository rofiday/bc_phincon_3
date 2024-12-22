/* * membuat project nemerapkan arsitektur clean code == behavior dari modul yang dipakai
jika menggunakan expres simpan di dalam src => ada folder lagi yang memisahkan pada bagian code pada folder masing-masing , config / configurasi
penggunakan contoroller oop menggunakan admin.contoller model. admin.model admin.routes
MENAMBAHKAN BAIK DIDEPAN MAUPUN AKHIR MENGGUNAKAN PARAMETER
SEDANGKAN MENGHAPUS TIDAK PERLU MENGGUNAKAN PARAMETER KARENA LANGSUNG MENGEKSEKUSI
catatan latihan 
penggunaan nama function dan variable harus meaningful
**/

//membuat 1 data student
const student = {
  name: "rofi",
};
//beberapa students
const students = [
  {
    name: "shabqie",
    class: "Ai for Everyone",
  },
  {
    name: "hamzah",
    class: "Product Management",
  },
];
//function yang mengembalikan nilai array / banyak
const getStudents = () => {
  return students;
};
//function yang mengembalikan satu
const getStudent = () => {
  return student;
};

//1.buat kan satu function untuk menambahkan data ke vatiable students
//menggunakan kata kerja diawal
// get mendapatkan, insert menambahkan
const addDataToStudents = (student) => {
  students.push(student);
  return students;
};
//mewakili kerja disini updatestudent karena ada data baru yang ditambahkan
// kenapa disimpan ke dalam variable?
const updatedStudents = addDataToStudents({
  name: "nanda",
  class: "fullStack",
});
console.log(updatedStudents);

//2. membuat function untuk menghapus data index pertama[0] divariable student
//kesalahan penamaan variable
const deleteDataFromStudents = () => {
  students.shift();
  return students;
};
//kata kerja , sebuah nama yang menjelaskan data mana yang dihapus ed tanpa ed menghapus keseluruhan atau bisa menggunakan remove => removed
const deletedStudents = deleteDataFromStudents();
console.log(deletedStudents);

//buatkan 1 function untuk menambahkan data awal ke variable students
//penamaan juga bisa
const insertDataToStudents = (student) => {
  students.unshift(student);
  return students;
};
const insertedStudents = insertDataToStudents({
  nama: "rofi",
  class: "fullStack",
});
console.log(insertedStudents);

const popDataFromStudents = () => {
  students.pop();
  return students;
};
// console ed
const popedStudents = popDataFromStudents();
console.log(popedStudents);

//destructuring
//rest sisaa mengambil data sisa
const animals = ["Dog", "Cat", "Rabbit"];
const [dog, restAnimals] = animals;
console.log(dog);
console.log(restAnimals);
// object bisa diganti jadi alias name name: namabaru
const plant = {
  name: "Mangga",
  color: "Red",
  size: "Big",
  type: "Fruit",
};
const { name: fruitName, color: colorName, ...restp } = plant; // hanya mengambil property name
// const {name, color, ...rest} =

const game = {
  name: "call of duty",
  genre: "FPS",
  rating: 4.8,
  price: {
    priceHD: 10000000,
    price: 20000,
  },
};

const {
  name: gameName, //alias tanpa nested
  genre,
  rating,
  price: { priceHD: priceGameHD }, //cara akses property jika nested + alias
} = game;
//teknik mencacah didalam cacahan : { {: }} prefix
// destruc cara akses secara langsung dan ditampung ke variable baru
// kalo tidak gaperlu destruc
console.log(gameName);
console.log(priceGameHD);
