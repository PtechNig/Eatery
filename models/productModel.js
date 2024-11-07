const mongoose = require('mongoose')

// instantiating the productSchema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category : {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    features: {
        type: Array,
        required: true
    }
})

// creating the model
const Product = mongoose.model('Product', productSchema)

// exporting the model
module.exports = Product