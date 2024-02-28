'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('shoes', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER 
      },
      image: {
        type: Sequelize.STRING
      }, 
      name: {
        type: Sequelize.STRING
      }, 
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      color: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('shoes');
  }
};