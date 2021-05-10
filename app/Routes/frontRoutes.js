const express = require('express')
const router = express.Router()
const axios = require('axios').default
const app = express()


router.get('/', async (req,res,next)=>{
    const data = await axios.get(`${req.protocol}://${req.hostname}:3000/api/tasks`)
    res.render('index',{
        data : data.data.data
    })
})


module.exports = router