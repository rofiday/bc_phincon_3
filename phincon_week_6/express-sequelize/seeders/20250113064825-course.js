"use strict";
const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let courses = [];
    const count = 20;
    for (let i = 0; i < count; i++) {
      courses.push({
        id: uuidv4(),
        name: faker.book.title(),
        credit: faker.number.int({ min: 1, max: 100 }),
      });
    }
    await queryInterface.bulkInsert("Courses", courses, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Courses", null, {});
  },
};
