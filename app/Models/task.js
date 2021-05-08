const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name : {type : string , required : true},
    type : {type : string , enum : ['TODO' , 'DOING' , 'DONE'] , required : true},
    description : {type : string}

})

const TASK = mongoose.model('TASK',taskSchema)

module.exports = TASK