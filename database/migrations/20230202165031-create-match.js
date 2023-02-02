'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playername: {
       // primaryKey: true,
        type: Sequelize.STRING
      },
      playertag: {
        //primaryKey: true,
        type: Sequelize.STRING
      },
      agentname: {
        type: Sequelize.STRING
      },
      gunkills: {
        type: Sequelize.INTEGER
      },
      ability1kills: {
        type: Sequelize.INTEGER
      },
      ability2kills: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Matches');
  }
};