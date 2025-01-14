const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../assets/jsons/cars.json");

module.exports = {
  getAllCars: (req, res) => {
    try {
      const cars = fs.readFileSync(filePath, "utf-8");
      console.log(cars);
      res.status(200).json({
        status: "success",
        data: JSON.parse(cars),
        message: "Success get all cars",
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
  createCar: (req, res) => {
    try {
      const cars = fs.readFileSync(filePath, "utf-8");
      const parsedCars = JSON.parse(cars);
      parsedCars.push(req.body);
      const stringifiedCars = JSON.stringify(parsedCars);
      fs.writeFileSync(filePath, stringifiedCars);
      res.status(200).json({
        status: "success",
        data: parsedCars,
        message: "Success Create a car",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  },
};
