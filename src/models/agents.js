"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Agents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Match, {
        foreignKey: "agentname",
        targetKey: "name",
            
      });
    }
  }
  Agents.init({
    name:{ type: DataTypes.STRING,
      primaryKey: true},
    ability1: DataTypes.STRING,
    ability2: DataTypes.STRING
  }, {
    sequelize,
    modelName: "Agents",
  });
  return Agents;
};