const Joi = require('joi')
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')


// creating schema for model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "User exits"],
        validate: [validator.isEmail, "Enter a valid email"],
        lowercase: true
    },
    phoneNo: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword:{
        type: String,
        required: true,
        validate:{
            validator: function(value){
                return value === this.password
            },
            message: 'Passwords do not match'
        }
    }
})


// encrypting the password if it not modified
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next
    }
    this.password = await bcrypt.hash(this.password, 12)

    this.confirmPassword =  undefined
    next()
})


// comparing user password with the already registered password
userSchema.methods.comparePassword = async function(password, passwordDB){
    return await bcrypt.compare(password, passwordDB)
}

// creating model
const EateryUser = mongoose.model('EateryUser', userSchema)

// exporting the model
module.exports = EateryUser