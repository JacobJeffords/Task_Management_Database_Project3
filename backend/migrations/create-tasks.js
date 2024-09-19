'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      taskName: {
        type: Sequelize.STRING,

      },
      
      taskDetails: {
        type: Sequelize.STRING,

      },

      taskAssignee: {
        type: Sequelize.STRING,

      },

      taskDate: {
        type: Sequelize.DATE,

      },

      taskTime: {
        type: Sequelize.TIME,

      },

      taskDueDate: {
        type: Sequelize.DATE,

      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};