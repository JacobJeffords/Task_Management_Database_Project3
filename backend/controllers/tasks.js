const express = require('express');
const Task = require('../models/task');
const router = express.Router();

// Authentication
const authenticateSession = (req, res, next) => {
    if (!req.session.userId) return res.sendStatus(401);
    next();
};

// Tasks Manager
router.post('/', authenticateSession, async (req, res) => {
    const { taskName, taskDetails, taskAssignee, taskDate, taskDue } = req.body;
    try {
        const task = new Task({
            taskName,
            taskDetails,
            taskAssignee,
            taskDate,
            taskDue,
            createdBy: req.session.userId
        });
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get All Tasks
router.get('/', authenticateSession, async (req, res) => {
    try {
        const tasks = await Task.find({ createdBy: req.session.userId });
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Updating the Task
router.put('/:id', authenticateSession, async (req, res) => {
    const { taskName, taskDetails, taskAssignee, taskDate, taskDueDate } = req.body;
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id, createdBy: req.session.userId },
            { taskName, taskDetails, taskAssignee, taskDate, taskDueDate },
            { new: true }
        );
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.status(200).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Deleting the Task
router.delete('/:id', authenticateSession, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, createdBy: req.session.userId });
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;