const express = require('express')
const taskController = require('./../Controller/taskController')
const router = express.Router()


router.route('/api/tasks')
.get(taskController.showAllTask)
.post(taskController.createTask)

router.route('/api/tasks/:id')
.get(taskController.showAllTask)

.put(taskController.editTask)
// .delete()



module.exports = router