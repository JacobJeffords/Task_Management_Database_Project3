'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      taskName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      taskDetails: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      taskAssignees: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      taskDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      taskTime: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      taskDueDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      taskDueTime: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks');
  }
};