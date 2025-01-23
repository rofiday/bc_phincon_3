const { Product, sequelize } = require("../models");
const { v4: uuidv4 } = require("uuid");
const { QueryTypes } = require("sequelize");

module.exports = {
  getStockCount: async (req, res) => {
    try {
      const products = await Product.findAll({
        attributes: {
          include: [[sequelize.literal(`price * stock`), "stockCount"]],
        },
      });
      console.log(products);
      if (!products)
        return res.status(404).json({ message: "Product not found" });
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
  getMaxPrice: async (req, res) => {
    try {
      /**
       const products = await sequelize.query(
        `SELECT * FROM Products WHERE price > 1500000 `,
        { type: QueryTypes.SELECT }
      );
      */
      /**
       // const products = await Product.findAll({
        //   attributes: {
          //     include: [[sequelize.literal(`price > 150000`), "maxPrice"]],
          //   },
          // });
        */
      const products = await Product.findAll({
        where: sequelize.where(sequelize.col("price"), ">", 150000),
      });
      console.log(products);
      if (!products)
        return res.status(404).json({ message: "Product not found" });
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
  getProductDiscount: async (req, res) => {
    try {
      /**
       // const products = await sequelize.query(
        //   `SELECT *,  price - (price * 0.1) AS discountPrice FROM Products `,
        //   { type: QueryTypes.SELECT }
        // );
      */
      const products = await Product.findAll({
        attributes: {
          include: [
            [sequelize.literal(`price - (price * 0.1)`), "discountPrice"],
          ],
        },
      });
      console.log(products);
      if (!products)
        return res.status(404).json({ message: "Product not found" });
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
