//default server setup
const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config()

const mongoose = require("mongoose")
const connect = async ()=> {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB")
    }
    
    catch (error) {
        console.log("MongoDB connection error:", error)
    }
}
connect()

const port = process.env.PORT? process.env.PORT: "3000"

//middleware configuration

//routes

//listen

app.listen(port, ()=> {
    console.log(`I'm listening on port ${port}`)
})


