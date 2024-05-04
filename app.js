const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const hpp = require('hpp')
const helmet = require('helmet')
const router = require('./src/routes/api')
require('dotenv').config()

const app = new express()

//security implement
app.use(cors())
app.use(hpp())
app.use(helmet())

app.use(express.json({limit:'20MB'}))
app.use(express.urlencoded({extended:true}))

//mongodb database connection

const URL = `${process.env.DATABASE_URL}`
const OPTION ={name:'', pass:'', autoIndex:true}

mongoose.connect(URL,OPTION).then((res)=>{
console.log('Database connected ...............')
}).catch((err)=>{
    console.log(err)
})

app.use('/api',router)
//

app.use('*',(req,res)=>{
    res.status(400).json({status:'404',message:'404 not found'})
})

module.exports = app
