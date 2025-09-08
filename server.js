const dotenv = require("dotenv")
dotenv.config()

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

const authController = require("./controllers/auth.js")
const foodsController = require("./controllers/food.js")

const port = process.env.PORT? process.env.PORT: "3000"


const methodOverride = require("method-override")
const morgan = require("morgan")
const session = require("express-session")
const isSignedIn = require("./middleware/is-signed-in.js")
const passUserToView = require("./middleware/pass-user-to-view.js")

app.use(express.urlencoded({extended: false}))
app.use(methodOverride(`_method`))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
     saveUninitialized: true
}))

app.use(passUserToView)

app.get(`/`,(req,res)=> {
    // console.log(req.session.user)
    if (req.session.user) {
        // res.redirect(`/users/${req.session.user._id}/foods`)
        res.render("./index.ejs",{user:req.session.user})
    }

    else {
        res.render("index.ejs",{user:req.session.user})
    }
})

app.use(`/auth`,authController)
app.use(isSignedIn)
app.use(`/users/:userId/foods`,foodsController)

app.listen(port, ()=> {
    console.log(`I'm listening on port ${port}`)
})


