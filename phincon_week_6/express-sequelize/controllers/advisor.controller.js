const { Advisor, Students, sequelize } = require("../models");
const { v4: uuidv4 } = require("uuid");
const { QueryTypes } = require("sequelize");

module.exports = {
  getStudentName: async (req, res) => {
    try {
      /**
       const advisors = await Advisor.findAll({
        attributes: ["id", "fullname", "major"],
        include: [
          {
            model: Students,
            attributes: ["name"],
          },
        ],
      });
      */
      const advisors = await sequelize.query(
        `SELECT a.id, a.fullname, s.name FROM Advisors a INNER JOIN Students s ON a.id = s.advisorId;`,
        { type: QueryTypes.SELECT }
      );

      if (!advisors) {
        return res.status(404).json({ message: "No advisors found" });
      }
      res.status(200).json({
        status: "success",
        data: advisors,
        message: "Successfully retrieved advisor list",
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: error.message });
    }
  },
  getAllAdvisors: async (req, res) => {
    try {
      const advisors = await Advisor.findAll({
        attributes: ["id", "fullname", "major"],
      });
      res.status(200).json({
        status: "success",
        data: advisors,
        message: "Successfully get all advisors",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  },
  getAdvisorById: async (req, res) => {
    const { id } = req.params;
    try {
      const advisor = await Advisor.findOne({
        where: { id },
      });
      if (!advisor) {
        return res.status(404).json({ message: "Advisor not found" });
      }
      res.status(200).send(advisor);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  },
  createAdvisor: async (req, res) => {
    try {
      const newAdvisor = await Advisor.create({
        ...req.body,
        id: uuidv4(),
      });
      res.status(201).json({
        status: "success",
        data: newAdvisor,
        message: "Successfully create advisor",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  },
  updateAdvisor: async (req, res) => {
    const { id } = req.params;
    try {
      const advisorUpdated = await Advisor.findOne({
        where: { id },
      });
      if (!advisorUpdated) {
        return res.status(404).json({ message: "Advisor not found" });
      }
      await advisorUpdated.update(req.body);
      res.status(200).json({
        status: "success",
        data: advisorUpdated,
        message: "Successfully update advisor",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  },
  deleteAdvisor: async (req, res) => {
    const { id } = req.params;
    try {
      const advisorDeleted = await Advisor.findOne({
        Where: { id },
      });
      if (!advisorDeleted) {
        return res.status(404).json({ message: "Advisor not found" });
      }
      await advisorDeleted.destroy();
      res.status(200).json({
        status: "success",
        message: "Successfully delete advisor",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  },
};
