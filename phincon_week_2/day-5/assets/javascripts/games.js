class Games {
  constructor(username) {
    this.games = [
      {
        id: 1,
        name: "PUBG",
      },
      { id: 2, name: "GTA" },
      { id: 3, name: "FIFA" },
    ];
    this.username = username;
  }
  playGame() {
    return this.games;
  }
  playGamesById(id) {
    return this.games.find((item) => item.id === id);
  }
}
const games = new Games("Rofi");
// console.log(games.playGame());
// console.log(games.playGamesById(2));

function GamesFunction(username) {
  this.username = username;
  this.games = [{ id: 1, name: "PUBG" }];
}
const gameFunction = new GamesFunction("Rofi");
// console.log(gameFunction.username);
// console.log(gameFunction.games);
//latihan class
class Animals {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }
  getInfo() {
    return `Hewan ini adalah ${this.type}, bernama ${this.name} , berumur ${this.age} tahun.`;
  }
}
const animal = new Animals("kelinci", 3, "mamalia");
// console.log(animal.getInfo());

//2n - n
const treeChedar = (stop) => {
  // const starArr = [];S
  for (let i = 1; i <= stop; i++) {
    let n = " ".repeat(stop - i) + "*";
    if (i > 1) {
      n = " ".repeat(stop - i) + "/";
    }
    for (let j = 1; j < 2 * i - 2; j++) {
      n += "*";
    }
    if (i > 1) {
      n += "\\";
    }
    console.log(n);
  }
};
treeChedar(4);
