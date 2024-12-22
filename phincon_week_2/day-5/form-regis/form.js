const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const kelas = document.getElementById("kelas").value;
  let genderL = document.getElementById("genderL").checked;
  let genderP = document.getElementById("genderP").checked;
  const selectStudy = document.getElementById("selectStudy").value;

  if (genderL === true) {
    genderL = "Laki-laki";
  } else if (genderP === true) {
    genderL = "Perempuan";
  }
  const date = document.getElementById("date").value;
  const jurusan = document.getElementById("jurusan").value;
  const table = document.getElementById("table");
  table.innerHTML += `<tr>
            <th>${name}</th>
            <td> ${kelas}</td>
            <td>${genderL}</td>
            <td>${date}</td>
            <td>${selectStudy}</td>
            <td>${jurusan}</td>
          </tr>`;
});

// option 2 menggunakan event onclick
// const getAllForm = (e) => {
// e.preventDefault();
// };

// console.log(name);
// console.log(kelas);
// console.log(genderL);
// console.log(genderP);
// console.log(date);
// console.log(jurusan);
// console.log(selectStudy);
