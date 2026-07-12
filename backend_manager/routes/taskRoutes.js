const express = require("express");

const router = express.Router();

const {
    getRoot,
    getTasks,
    getTaskById,
    updateTask,
    createTask,
    deleteTask
} = require("../controllers/taskController");

router.get("/", getRoot);

router.get("/tasks", getTasks);

router.get("/tasks/:id", getTaskById);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

module.exports = router;