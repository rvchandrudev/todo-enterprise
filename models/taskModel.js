const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({

    isCompleted:{
        type:Boolean,
        default:false
    },
    title:{
        type:String
    }
})

const todo = mongoose.model('todos',taskSchema);

module.exports = todo;