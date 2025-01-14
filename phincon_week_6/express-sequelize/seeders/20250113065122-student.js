"use strict";
const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");
const { Advisor } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //query dulu
    const advisors = await Advisor.findAll({
      attibutes: ["id"],
    });
    const randomAdvisorId = advisors.map((advisor) => advisor.id);
    const getRandomAdvisorId = () =>
      randomAdvisorId[Math.floor(Math.random() * advisors.length)];
    let students = [];
    const count = 20;
    for (let i = 0; i < count; i++) {
      students.push({
        id: uuidv4(),
        name: faker.person.fullName(),
        admissionYear: faker.number.int({ min: 2018, max: 2021 }),
        major: faker.person.jobTitle(),
        advisorId: getRandomAdvisorId(),
      });
    }
    await queryInterface.bulkInsert("Students", students, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Students", null, {});
  },
};
