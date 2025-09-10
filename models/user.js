//import mongoose
const mongoose = require("mongoose")
const { stringify } = require("querystring")

//create schema

const foodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    brand: String,
    foodType: {type: String,
        enum:["meat", "fish", "dairy", "vegetable", "fruit", "grain",
    "legume", "nut", "seed", "oil", "sweetener", "beverage",
    "condiment", "supplement", "processed", "other"
        ]},
    servingSize: String,       
    calories: String,
    fat: String,
    carbohydrates: String,
    protein: String,
    sodium: String,
    cholesterol: String,
    isLow: Boolean
})

const userSchema = new mongoose.Schema({
    username: {type:String, required: true},
    password: {type: String, required:true},
    foods: [foodSchema]
})

//define model
const User = mongoose.model("User",userSchema)

//export
module.exports = User