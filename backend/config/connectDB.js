
//1- require Mongoose
const mongoose = require('mongoose');

//2 - connection to DB
const connectDB =async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true})
        console.log('DataBase is Connected Successfuly !')
    } catch (error) {
        console.error(`Connection DataBase Failed !! ${error}`)
    }
}

module.exports = connectDB