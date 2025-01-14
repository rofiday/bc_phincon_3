require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const carsRoutes = require("./routes/car.routes");
const {
  auth,
  validatiionUpdateUser,
  validationDeleteUser,
} = require("./middlewares/user.middleware");
const { validationCreateCar } = require("./middlewares/car.middleware");
console.log(process.env.NODE_ENV);
app.use(
  cors({
    //setup credentials
    origin: "*", //artinya waild car untuk bisa diconsume semua
    methods: ["GET", "POST"],
  })
);
app.use(express.json());
//req untuk request
app.get("/", (req, res) => {
  res.send("Phincon Academy!");
});
app.get("/users", (req, res) => {
  res.send("User Id : ");
});
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User ID: ${id}`);
});
app.get("/users", (req, res) => {
  const { name } = req.query;
  //harus dilakukan validasi ketika data tidak ada
  if (!name) return res.send("Name is required");
  res.send(`User Name: ${name}`);
});
//body
app.post("/users", (req, res) => {
  const { name } = req.body;
  if (!name) return res.send("Name is required");
  res.send(`User Name: ${name}`);
});
//mendaftarkan routes api ke root parent
app.use("/api/users", validatiionUpdateUser, validationDeleteUser, userRoutes);
app.use("/api/cars", validationCreateCar, carsRoutes);
//jalankan server expres
app.listen(port, () => {
  console.log(`express basic app listening on port  ${port}`);
});
