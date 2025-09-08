//import mongoose
const mongoose = require("mongoose")
const { stringify } = require("querystring")

//create schema

const foodSchema = new mongoose.Schema({
    name: String,
    isLow: Boolean,
    foodType: {type: String,
        enum:["meat", "fish", "dairy", "vegetable", "fruit", "grain",
    "legume", "nut", "seed", "oil", "sweetener", "beverage",
    "condiment", "supplement", "processed", "other"
        ]},       
    calories: Number,
    fat: Number,
    carbohydrates: Number,
    protein: Number,
    sodium: Number,
    cholesterol: Number
})

const userSchema = new mongoose.Schema({
    username: {type:strnng, required: true},
    password: {type: stringing, required:true},
    foods: [foodSchema]
})

//define model
const User = mongoose.model("User",userSchema)

//export
module.exports = User