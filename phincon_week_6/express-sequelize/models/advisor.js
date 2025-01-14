"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Advisor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Advisor.hasMany(models.Student, { foreignKey: "advisorId" });
    }
  }
  Advisor.init(
    {
      fullname: DataTypes.STRING,
      major: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Advisor",
    }
  );
  return Advisor;
};
