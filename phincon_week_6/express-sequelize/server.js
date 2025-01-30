require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require("./routes");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/", routes);
app.get("/", (req, res) => {
  res.send("Welcome to My APi");
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
