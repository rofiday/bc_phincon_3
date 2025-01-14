const express = require("express");
const productRoutes = require("./routes/product.routes");
const { validationCreateProduct } = require("./middlewares/product.middleware");
const cors = require("cors");
const app = express();
const port = 8080;
app.use(
  cors(
    //setup credentials
    {
      origin: "*", //artinya waild car untuk bisa diconsume semua
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    }
  )
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello World");
});
app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`server running  on port http://localhost:${port}`);
});
