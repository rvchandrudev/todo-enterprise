const {check} = require('express-validator');
const { param } = require('../routes/taskRouter');

const checkAddTask  = [
    check('title').notEmpty().withMessage('Please provide a title for the task')
]

module.exports = {checkAddTask}