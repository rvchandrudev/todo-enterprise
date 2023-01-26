const express = require('express');
const taskRouter = express.Router();
const taskController = require('../controllers/taskController');

const {checkAddTask,checkDeleteTask} = require('../validators/taskValidator');

const {validationMiddleware} = require('../middlewares/validationMiddleware');

taskRouter.get('/tasks', taskController.getTasks)

taskRouter.post('/tasks',checkAddTask,validationMiddleware,taskController.addTask)

taskRouter.delete('/tasks/:id',taskController.deleteTasks)

taskRouter.patch('/tasks/:id',taskController.updateTasks)

module.exports = taskRouter;