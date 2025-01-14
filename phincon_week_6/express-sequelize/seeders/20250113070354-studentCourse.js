"use strict";
const { v4: uuidv4 } = require("uuid");
const { Student, Course } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //query dulu
    const students = await Student.findAll({
      attibutes: ["id"],
    });
    const course = await Course.findAll({
      attibutes: ["id"],
    });
    const randomStudentIds = students.map((student) => student.id);
    const getRandomStudentId = () =>
      randomStudentIds[Math.floor(Math.random() * students.length)];
    const randomCourseIds = course.map((course) => course.id);
    const getRandomCourseId = () =>
      randomCourseIds[Math.floor(Math.random() * course.length)];

    let studentCourses = [];
    const count = 20;
    for (let i = 0; i < count; i++) {
      studentCourses.push({
        id: uuidv4(),
        studentId: getRandomStudentId(),
        courseId: getRandomCourseId(),
      });
    }
    await queryInterface.bulkInsert("StudentCourses", studentCourses, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("StudentCourses", null, {});
  },
};
