const express = require('express')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const mongoStore = require('connect-mongo')
const dotenv = require('dotenv').config({path:process.cwd()+'/config.env'})

const routes = require('./Routes/APIRoutes')
class application {
    constructor(){
        this.setConfig()
        this.setDB()
        this.setRoute()
        this.setExpress()
    }

    async setDB(){
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true});
            console.log('Connected To DB')
    }

     setConfig(){
        app.use(express.json())
        app.use(express.urlencoded({extended:true}))
        app.use(cookieParser(process.env.COOKIE_SECRET))
        app.use(session({
            secret : process.env.SESSION_SECRET,
            resave : true,
            saveUninitialized : true,
            cookie : {httpOnly:true , maxAge:24*60*60*1000},
            store :  mongoStore.create({mongoUrl:process.env.MONGODB_URL})
        }))

    }   

    setRoute(){
        app.use(routes)
    }

    setExpress(){
        app.listen(process.env.PORT || 3000 , '127.0.0.1', ()=>{
            console.log(`Server Is Run In Port : ${process.env.PORT} ...`)
        })
    }
    

}


module.exports = application