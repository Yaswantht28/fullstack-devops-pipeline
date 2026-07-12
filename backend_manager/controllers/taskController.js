const Task = require("../models/task");

// Root API
function getRoot(req, res) {

    res.json({
        message: "Task Manager API is running",
        status: "success"
    });

}

// Get all tasks
async function getTasks(req, res) {

    try {

        const tasks = await Task.find();

        res.status(200).json(tasks);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

}

// Create Task
async function createTask(req, res) {

    try {

        const task = await Task.create(req.body);

        res.status(201).json({
            message: "Task created successfully",
            task
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

}

async function getTaskById(req, res) {

    try {

        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json(task);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

}

async function updateTask(req, res) {

    try {

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task updated successfully",
            task
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

}

async function deleteTask(req, res) {

    try {

        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {

            return res.status(404).json({
                message: "Task not found"
            });

        }

        res.status(200).json({
            message: "Task deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

}

module.exports = {
    getRoot,
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};