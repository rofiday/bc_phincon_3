const express = require("express");
const app = express();
const env = require("dotenv");
const port = process.env.PORT || 8080;
const cors = "cors";

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.listen(port, () => {
  console.log();
});
