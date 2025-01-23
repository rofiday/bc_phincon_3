const path = require("path");
const products = require("../assets/jsons/products-json.json");
const filePath = path.join(__dirname, "../assets/jsons/products-json.json");
const fs = require("fs");
module.exports = {
  getAllProducts: (req, res) => {
    try {
      const productFS = JSON.parse(
        fs.readFileSync("assets/jsons/products-json.json", "utf-8")
      );

      res.status(200).send(productFS);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  },
  getDataProductById: (req, res) => {
    const { id } = req.params;
    const product = products.products.find(
      (product) => product.id === Number(id)
    );
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  },
  createDataProduct: (req, res) => {
    console.log(req.body);
    const product = fs.readFileSync(filePath, "utf-8");
    const parsedProduct = JSON.parse(product).products;
    let newId = parsedProduct.length + 1;
    req.body.id = newId;
    parsedProduct.push(req.body);
    const stingifiedProduct = JSON.stringify({ products: parsedProduct });
    fs.writeFileSync(filePath, stingifiedProduct);
    res.status(201).json({
      status: "success",
      data: parsedProduct,
      message: "data product berhasil dibuat",
    });
  },
  updateDataProduct: (req, res) => {
    const { id } = req.params;
    const product = products.products.find((product) => product.id == id);
    if (product) {
      const { name, price, category, stock } = req.body;
      product.name = name || product.name;
      product.price = price || product.price;
      product.category = category || product.category;
      product.stock = stock || product.stock;
      fs.writeFileSync(
        filePath,
        JSON.stringify({ products: products.products })
      );
      res.status(200).json({
        status: "success",
        data: product,
        message: "data updated",
      });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  },
  deleteDataProductById: (req, res) => {
    const { id } = req.params;
    console.log("id: ", id);
    const index = products.products.findIndex(
      (product) => product.id === Number(id)
    );
    console.log(index);
    if (index !== -1) {
      products.products.splice(index, 1);
      fs.writeFileSync(
        filePath,
        JSON.stringify({ products: products.products })
      );
      res.status(200).json({
        status: "success",
        data: id,
        message: "Data berhasil Di delete.",
      });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  },
};
