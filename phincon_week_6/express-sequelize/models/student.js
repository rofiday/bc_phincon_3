"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsTo(models.Advisor, {
        foreignKey: "advisorId",
        as: "advisor",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Student.hasOne(models.Thesis, {
        foreignKey: "studentId",
        as: "thesis",
      });
      Student.belongsToMany(models.Course, {
        through: "StudentCourses",
        foreignKey: "studentId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      major: DataTypes.STRING,
      advisorId: DataTypes.STRING,
      admissionYear: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};
