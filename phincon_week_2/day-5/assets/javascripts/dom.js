//jika satu penamaan ga perlu spesifik
//penamaan jika pake id gunakan nama id
const list = document.getElementById("list");
console.log(list);

const classList = document.getElementsByClassName("list");
//menampung length , prototype, list
console.log(classList);

const nameList = document.getElementsByName("list");
console.log(nameList);

const queryList = document.querySelector(".list");
//lebih lambat karena query melakukan pencarian
//digunakan jika mau dapetin class / atau nama
//apabila element yang dicari ada id maka gunakan aid
console.log(queryList);

const queryAllList = document.querySelectorAll("#list");
//mengembalikan lebih dari satu sama seperti name mengembalikan nodelist
console.log(queryAllList);

const tagList = document.getElementsByTagName("li");
console.log(tagList);
const firstUlList = document.querySelectorAll("#list li");
console.log(firstUlList);
const btn = document.getElementById("btn");
console.log(btn);
btn.textContent = "Klik ME!";
btn.style.backgroundColor = "blue";
btn.style.color = "#fff";
// manipulasi text  overraiding menimpa jadi textContent diubah
btn.textContent = "Klik Saya";
//hapus element / node
btn.remove();

//append , prepend , sibling melakukan seleksi terhadap sebelahnya,
//createElement dengan method btn.CreateElement
const div = document.createElement("div");
// const textNode = document.createTextNode("Hello World");
// div.appendChild(textNode);
//cara lain apabila hanya untuk membuat textcontent
div.textContent = "Hello World";
//inner html digunakan untuk membuat element html didalam text content secara langsung
console.log(div);

const body = document.getElementById("body");
body.appendChild(div);

const listThree = document.getElementById("listThree");
const animals = [
  "Cat",
  "Dog",
  "Mouse",
  "Horse",
  "Tiger",
  "Lion",
  "Elephant",
  "Pig",
  "Cow",
  "Goat",
];
for (let i of animals) {
  //indexOf
  const li = document.createElement("li");
  li.textContent = i;
  listThree.appendChild(li);
}
