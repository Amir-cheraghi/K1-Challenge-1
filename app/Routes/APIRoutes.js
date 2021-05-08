const express = require('express')
const taskController = require('./../Controller/taskController')
const router = express.Router()


router.route('/api/tasks')
.get(taskController.showAllTask())
.post()

router.route('/api/tasks/:id')
.get(taskController.showAllTask())

.put()
.delete()



module.exports = router