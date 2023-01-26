const todo = require('../models/taskModel');

const getTasks = async (req,res) => {

    const tasks  = await todo.find({});
    res.send(tasks);
}

const addTask = async (req,res) => {

    const {title} = req.body;

    console.log(title);

    const task = new todo({title});

    await task.save();

    res.send(task);
}

const updateTasks = async (req,res) => {

    const {id} = req.params;
    
    const {isCompleted} = req.body;

    console.log({isCompleted});

    const task = await todo.findByIdAndUpdate(id,{isCompleted})

    res.send(task);
}

const deleteTasks = async (req,res) => {

    const {id} = req.params;

    const task = await todo.findOneAndDelete({_id:id});

    res.send(task);
}

module.exports = { getTasks, addTask, updateTasks ,deleteTasks } ;