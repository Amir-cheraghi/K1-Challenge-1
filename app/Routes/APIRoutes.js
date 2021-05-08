const express = require('express')
const taskController = require('./controller/taskcontroller')
const router = express.Router()


router.route('/api')
.get()
.post()
.put()
.delete()



module.exports = router