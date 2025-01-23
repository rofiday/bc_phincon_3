const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDiscount,
  getMaxPrice,
  getStockCount,
} = require("../controllers/product.controller");
const router = express.Router();

router.get("/queryStock", getStockCount);
router.get("/maxPrice", getMaxPrice);
router.get("/query", getProductDiscount);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
