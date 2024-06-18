const mongoose = require('mongoose')

// instantiating the menuSchema
const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

// creating the model
const Menu = mongoose.model('Menu', menuSchema)

// exporting the model
module.exports = Menu