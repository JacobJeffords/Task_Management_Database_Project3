'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {

  };
  Task.init({
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
}, {
  sequelize,
  underscored: true,
  modelName: 'Task',
});
return Task;
};