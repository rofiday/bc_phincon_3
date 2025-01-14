const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("testing server");
});
app.get("/sum", (req, res) => {
  const { bilOne, bilTwo } = req.query;
  const sum = Number(bilOne) + Number(bilTwo);
  console.log(sum);
  res.send(`testing sum ${sum}`);
});
app.post("/sum", (req, res) => {
  const { bilOne, bilTwo } = req.body;
  console.log(bilOne, bilTwo);
  const sum = bilOne + bilTwo;
  //
  res.send({
    bilOne: bilOne,
    bilTwo: bilTwo,
    output: sum,
  });
});
app.post("/substract", (req, res) => {
  const { bilOne, bilTwo } = req.body;
  console.log(bilOne, bilTwo);
  const substract = bilOne - bilTwo;
  res.send({
    bilOne: bilOne,
    bilTwo: bilTwo,
    output: substract,
  });
});
app.post("/multiply", (req, res) => {
  const { bilOne, bilTwo } = req.body;
  console.log(bilOne, bilTwo);
  const multiply = bilOne * bilTwo;
  res.send({
    bilOne: bilOne,
    bilTwo: bilTwo,
    output: multiply,
  });
});
app.post("/divide-by", (req, res) => {
  const { bilOne, bilTwo } = req.body;
  console.log(bilOne, bilTwo);
  const divide = bilOne / bilTwo;
  res.send({
    bilOne: bilOne,
    bilTwo: bilTwo,
    output: divide,
  });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
