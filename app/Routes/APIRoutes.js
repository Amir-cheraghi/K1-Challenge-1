const express = require('express')
const taskController = require('./../Controller/taskController')
const router = express.Router()


router.route('/api/tasks')
.get(taskController.showAllTask)
.post(taskController.createTask)

router.route('/api/tasks/:id')
.get(taskController.showTaskById)
.put(taskController.editTask)
.delete(taskController.deleteTask)



module.exports = router