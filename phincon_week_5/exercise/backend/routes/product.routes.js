const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createDataProduct,
  getDataProductById,
  updateDataProduct,
  deleteDataProductById,
} = require("../controllers/product.controller");
const {
  validatorCreateProducts,
  validatorUpdateProducts,
} = require("../middlewares/product.middleware");

//endpoint
// app.get("/", (req, res) => {
//   res.send();
// });
// diganti jadi ini karena dibuat di controllers
router.get("/", getAllProducts);
router.get("/:id", getDataProductById);
router.post("/", validatorCreateProducts, createDataProduct);
router.put("/:id", validatorUpdateProducts, updateDataProduct);
router.delete("/:id", deleteDataProductById);
module.exports = router;
