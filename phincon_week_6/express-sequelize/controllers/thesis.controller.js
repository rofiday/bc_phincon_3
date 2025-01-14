const { where } = require("sequelize");
const { Thesis, Student, Advisor } = require("../models");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  getAllThesis: async (req, res) => {
    try {
      const theses = await Thesis.findAll({
        attributes: ["id", "title"],
        include: [
          {
            model: Student,
            attributes: ["id", "name"],
            as: "student",
            //bisa nested includes
            include: [
              {
                model: Advisor,
                attributes: ["id", "fullname"],
                as: "advisor",
              },
            ],
          },
        ],
      });
      res.status(200).json({
        status: "success",
        data: theses,
        message: "Success get all students",
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
  getThesisById: async (req, res) => {
    const { id } = req.params;
    try {
      const thesis = await Thesis.findOne({
        where: { id },
      });
      res.status(200).send(thesis);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  },
  createThesis: async (req, res) => {
    try {
      const newThesis = await Thesis.create({
        ...req.body,
        id: uuidv4(),
      });
      res.status(200).json({
        status: "success",
        data: newThesis,
        message: "Data Thesis Created",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  updateThesis: async (req, res) => {
    const { id } = req.params;
    try {
      const thesis = await Thesis.findOne({
        where: { id },
      });
      if (!thesis) {
        return res.status(404).json("Data Not Found..");
      }
      await thesis.update(req.body);
      res.status(200).json({
        status: "success",
        data: thesis,
        message: "Data Thesis Updated..",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  deleteThesis: async (req, res) => {
    const { id } = req.params;
    try {
      const thesis = await Thesis.findOne({
        where: { id },
      });
      if (!thesis) {
        return res.status(404).json("Data Not Found..");
      }
      await thesis.destroy();
      res.status(200).json({
        status: "success",
        message: "Data Thesis Deleted...",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};
