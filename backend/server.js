//1-require express
const express =require('express')
//2 -instance of express 
const app = express()

//5 - Rquire dotenv & configure
require('dotenv').config()
//8- middlware parser  (for reading content red.body ) //eplacent : before routes
app.use(express.json())
//6- Connect to DataBase
const connectDB = require('./config/connectDB')
connectDB()
//7 - Routes-------------------
app.use('/api/contacts',require('./routes/contact'))





//3 -PORT
const PORT = process.env.PORT
// 4- create server
app.listen(PORT, error =>
    error? console.error(error)
    :
    console.log(`SERVER IS RUNNING ON PORT ${PORT}...`))
    