const express = require("express");
const cors = require("cors");
require("dotenv").config()
const app = express()




// middleware
app.use(cors())
app.use(express.json())




app.get('/',(req,res)=> {
    res.send("procorp members server running")
})
app.get('/health',(req,res)=> {
    res.send("health ok")
})


module.exports = app