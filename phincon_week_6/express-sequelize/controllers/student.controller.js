const { Student, Advisor, Thesis, sequelize } = require("../models");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  getStudentIdentity: async (req, res) => {
    try {
      // const student = await sequelize.query(
      //   `SELECT id, name, admissionYear, CONCAT(name, " ", admissionYear) AS studentIdentity FROM Students`,
      //   { type: sequelize.QueryTypes.SELECT }
      // );
      const student = await Student.findAll({
        attributes: {
          include: [
            [
              sequelize.literal(`CONCAT(name, " ", admissionYear)`),
              "studentIdentity",
            ],
          ],
        },
      });
      console.log(student);
      res.status(200).json({
        status: "success",
        data: student,
        message: "Success get all students",
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
  getAllStudent: async (req, res) => {
    try {
      const students = await Student.findAll({
        attributes: ["id", "name"],
        include: [
          {
            model: Advisor,
            attributes: ["id", "fullname"],
            as: "advisor",
            //bisa nested includes
          },
          { model: Thesis, attributes: ["title"], as: "thesis" },
        ],
      });
      res.status(200).json({
        status: "success",
        data: students,
        message: "Success get all students",
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
  getStudentById: async (req, res) => {
    const { id } = req.params;
    try {
      const student = await Student.findOne({
        where: { id },
      });
      res.status(200).send(student);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  createStudent: async (req, res) => {
    try {
      const newStudent = await Student.create({
        ...req.body,
        id: uuidv4(),
      });
      res.status(201).json({
        status: "success",
        data: newStudent,
        message: "Data Student Created..",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  updateStudent: async (req, res) => {
    const { id } = req.params;
    try {
      const studentUpdated = await Student.findOne({
        where: { id },
      });
      if (!studentUpdated) {
        return res.status(404).send("student not found");
      }
      await studentUpdated.update(req.body);
      res.status(200).json({
        status: "success",
        data: studentUpdated,
        message: "Data Student Updated...",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  deleteStudent: async (req, res) => {
    const { id } = req.params;
    try {
      const student = await Student.findOne({
        where: {
          id,
        },
      });
      if (!student) {
        return res.status(404).json("Data Not Found..");
      }
      await student.destroy();
      res.status(200).json({
        status: "success",
        message: "Data Deleted...",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};
