//default server setup
const express = require("express")
const app = express()

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

//controller setup

//middleware configuration
const dotenv = require("dotenv")
dotenv.config()

const methodOverride = require("method-override")
const morgan = require("morgan")
const session = require("express-session")

app.use(express.urlencoded({extended: false}))
app.use(methodOverride(`_method`))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
     saveUninitialized: true
}))

//routes

//controller routes

//listen

app.listen(port, ()=> {
    console.log(`I'm listening on port ${port}`)
})


