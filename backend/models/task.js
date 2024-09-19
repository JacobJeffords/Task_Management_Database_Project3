const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Task extends Model {}
Task.init({
  taskName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  taskDetails: {
    type: DataTypes.STRING,
    allowNull: false,
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
    allowNull: false,
  },
  
}, { sequelize, modelName: 'Task' });

module.exports = Task;