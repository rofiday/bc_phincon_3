"use strict";
const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");
const { Student } = require("../models");
const student = require("../models/student");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //query dulu
    const students = await Student.findAll({
      attibutes: ["id"],
    });
    const randomStudentIds = students.map((student) => student.id);
    const getRandomStudentId = () =>
      randomStudentIds[Math.floor(Math.random() * students.length)];
    let theses = [];
    const count = 20;
    for (let i = 0; i < count; i++) {
      theses.push({
        id: uuidv4(),
        title: faker.book.title(),
        studentId: getRandomStudentId(),
      });
    }
    await queryInterface.bulkInsert("Theses", theses, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Theses", null, {});
  },
};
