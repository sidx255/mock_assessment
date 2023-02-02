"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Agents
        , {
          foreignKey: "agentname",
          targetKey: "name",
        });
    }
  }
  Match.init({
    playername: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    playertag: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    agentname: DataTypes.STRING,
    gunkills: DataTypes.INTEGER,
    ability1kills: DataTypes.INTEGER,
    ability2kills: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: "Match",
  });
  return Match;
};