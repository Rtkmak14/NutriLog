const express = require("express")
const router = express.Router()

const User = require("../models/user.js")

router.get(`/`, async (req,res)=> {
   try {
    res.render("foods/index.ejs")
   }

   catch (error) {
    console.log(error)
    res.redirect(`/`)
   }
})

router.get(`/new`, async (req,res)=> {
    res.render("foods/new.ejs")
})

module.exports = router