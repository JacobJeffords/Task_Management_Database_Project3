const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Task = sequelize.define('Task', {
  taskName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  taskDetails: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  taskAssignee: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  taskDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  taskTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  taskDueDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = Task;