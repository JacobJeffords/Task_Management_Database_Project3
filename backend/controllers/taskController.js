//CRUD OPerations
// Creates a Task
const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { taskName, taskDetails, taskAssignee, taskDate, taskTime, taskDueDate } = req.body;
  try {
    const task = await Task.create({ taskName, taskDetails, taskAssignee, taskDate, taskTime, taskDueDate  });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.findAll();
  res.status(200).json(tasks);
};