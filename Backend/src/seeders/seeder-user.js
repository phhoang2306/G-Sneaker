'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('shoes', [{
        
    }]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('shoes');
  }
};