const Joi = require('joi')

// joi userSchema
const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().lowercase().required(),
    phoneNo: Joi.string().required().max(11).min(11),
    password: Joi.string().required().min(5),
    confirmPassword: Joi.string().required().min(5),
})

module.exports = userSchema