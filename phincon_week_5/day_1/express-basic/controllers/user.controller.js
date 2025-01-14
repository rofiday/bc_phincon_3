const users = require("../assets/jsons/users.json");
const fs = require("fs");
module.exports = {
  getAllUsers: (req, res) => {
    res.status(200).send(users);
  },
  createUser: (req, res) => {
    const { username } = req.body;
    res.status(201).send(`Create User: ${username}`);
  },
  //kalo update butuh params dan body
  updateUserById: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    console.log(users);
    //langkah selanjutnya update array
    users.forEach((user) => {
      if (user.id == id) {
        user.name = name;
      }
    });
    console.log(users);
    //fs digunakan untuk menulis ke file server
    fs.writeFileSync("assets/jsons/users.json", JSON.stringify(users));
    res.status(200).json({
      status: "success",
      data: users.find((user) => user.id === Number(id)),
      message: "Success update user",
    });
  },
  deleteUserById: (req, res) => {
    const { id } = req.params;
    users.forEach((user, index) => {
      if (user.id === Number(id)) {
        users.splice(index, 1);
      }
    });
    fs.writeFileSync("assets/jsons/users.json", JSON.stringify(users));
    res.status(200).json({
      status: "success",
      data: id,
      message: "Success delete user",
    });
  },
};
