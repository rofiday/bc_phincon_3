const { Product } = require("../models");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.status(200).json({
        status: "success",
        data: products,
        message: "Success get all products",
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
  getProductById: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findOne({
        where: { id },
      });
      if (!product)
        return res.status(404).json({ message: "Product not found" });
      res.status(200).json({
        status: "success",
        data: product,
        message: "Successfully get product",
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
  createProduct: async (req, res) => {
    try {
      const newProduct = await Product.create({
        ...req.body,
        id: uuidv4(),
      });
      res.status(201).json({
        status: "success",
        data: newProduct,
        message: "Successfully create product",
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
  updateProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findOne({
        where: { id },
      });
      if (!product)
        return res.status(404).json({ message: "Product not found" });
      await product.update(req.body);
      res.status(200).json({
        status: "success",
        data: product,
        message: "Successfully update product",
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
  deleteProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findOne({
        where: { id },
      });
      if (!product)
        return res.status(404).json({ message: "Product not found" });
      await product.destroy();
      res.status(200).json({
        status: "success",
        message: "Successfully delete product",
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
};
