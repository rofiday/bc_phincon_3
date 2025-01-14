const express = require("express");
const router = express.Router();
const { getAllCars, createCar } = require("../controllers/car.controller");
router.get("/", getAllCars);
router.post("/", createCar);
module.exports = router;
