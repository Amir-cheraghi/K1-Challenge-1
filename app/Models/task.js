const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name : {type : String , required : true},
    type : {type : String , enum : ['TODO' , 'DOING' , 'DONE'] , required : true  , uppercase : true},
    description : {type : String}

})

const TASK = mongoose.model('TASK',taskSchema)

module.exports = TASK