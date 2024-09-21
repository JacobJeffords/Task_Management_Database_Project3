const express = require('express');
const db = require('../models');
const router = express.Router();

// Create a new task
router.post('/', async (req, res) => {
  try {
    const task = await db.Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Error creating task' });
  }
});

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await db.Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
});

// Update a task
router.put('/:id', async (req, res) => {
  try {
    const task = await db.Task.findByPk(req.params.id);
    if (task) {
      await task.update(req.body);
      res.json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Error updating task' });
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  try {
    const task = await db.Task.findByPk(req.params.id);
    if (task) {
      await task.destroy();
      res.json({ message: 'Task deleted' });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting task' });
  }
});

module.exports = router;