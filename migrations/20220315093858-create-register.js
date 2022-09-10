'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('registers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      OrgType: {
        type: Sequelize.STRING
      },
      OrgName: {
        type: Sequelize.STRING
      },
      OrgEmail: {
        type: Sequelize.STRING
      },
      OrgId: {
        type: Sequelize.INTEGER
      },
      OrgPassword: {
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
    await queryInterface.dropTable('registers');
  }
};