const students = {
  name: "John Doe",
  age: 20,
  gender: "male",
  hobbies: ["reading", "playing games", "coding"],
  address: {
    street: "Jalan Raya",
    city: "Jakarta",
    province: "DKI Jakarta",
    country: "Indonesia",
  },
  friends: [
    {
      name: "Alice",
      age: 19,
      gender: "female",
      hobbies: ["reading", "playing games", "coding"],
      address: {
        street: "Jalan Raya",
        city: "Jakarta",
        province: "DKI Jakarta",
        country: "Indonesia",
      },
    },
    {
      name: "Bob",
      age: 21,
      gender: "male",
      hobbies: ["reading", "playing games", "coding"],
      address: {
        street: "Jalan Raya",
        city: "Jakarta",
        province: "DKI Jakarta",
        country: "Indonesia",
      },
    },
  ],
};

/**
 *
 * Kerjakan soal berikut :
 *
 * 1. Buatlah function untuk looping hobbies dari John Doe
 *
 * 2. Buatlah function untuk looping friends dari John Doe
 *
 * 3. Buatlah function untuk looping hobbies dari Alice
 *
 * 4. Akses semua alamat dari Bob
 *
 * 5. Buatkan function untuk akses semua alamat dari semua teman
 *
 */
/*
* catatan
parameter yang diberikan pada function dijadikan sebagai rujukan akses terhadap data
argument pada saat pemanggilan function baru akses mau ke property yang mana.
*return hanya digunakan diluar for.
*/
//1. looping hobbies
const getDataHobbies = (hobbies) => {
  for (let index in hobbies) {
    console.log(hobbies[index]);
  }
};
console.log("no.1");
getDataHobbies(students.hobbies);
console.log("\n");
//2. function loop friends jhon
const getDataFriends = (friends) => {
  for (let index in friends) {
    console.log(friends[index]);
  }
};
console.log("no.2");
getDataFriends(students.friends);
console.log("\n");

//3. looping alice hobbies
const getDataHobbiesAlice = (aliceHobbies) => {
  for (let index in aliceHobbies) {
    console.log(aliceHobbies[index]);
  }
};
console.log("no.3");
getDataHobbiesAlice(students.friends[0].hobbies);
console.log("\n");

//4.akses alamat bob
const getAddressBob = (address) => {
  for (let index in address) {
    console.log(address[index]);
  }
};
console.log("no.4");
getAddressBob(students.friends[1].address);
console.log("\n");

//5.akses semua alamat semua teman
const getAddress = (address) => {
  for (let index in address) {
    console.log(address[index].address);
  }
};
console.log("no.5");
getAddressBob(students.friends);
