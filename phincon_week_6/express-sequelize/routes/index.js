const express = require("express");
const router = express.Router();
const productRoutes = require("./product.route");
const studentRoutes = require("./student.routes");
const thesesRoutes = require("./thesis.routes");
const advisorRoutes = require("./advisor.routes");

router.use("/api/products", productRoutes);
router.use("/api/students", studentRoutes);
router.use("/api/theses", thesesRoutes);
router.use("/api/advisors", advisorRoutes);

module.exports = router;
