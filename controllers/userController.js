const userModel = require('../models/userModel')
const JoiSchema = require('../utils/userSchema')
const mailer = require('../utils/mailSender')
const asyncErrorHandler = require('../errorHandler/asyncErrorHandler')
const CustomError = require('../errorHandler/customError')

// registering new user
const register = asyncErrorHandler( async (req, res, next) => {

    // distructuring the request body
    const {name, email, phoneNo, password, confirmPassword} = req.body

    // checking whether the user exists or not
    const existingUser = await userModel.findOne({email})
    if(existingUser){

        const err = new CustomError('User already exists', 400)
        next(err)
        return
    }

    // validating the request body
    await JoiSchema.validateAsync({name, email, phoneNo, password, confirmPassword})

    // creating the user
    const user = await userModel.create({
        name,
        email,
        phoneNo,
        password,
        confirmPassword
    })

    // sending email
    await mailer(user)

    // sending message back to the user
    res.status(201).json({
    status:'success',
    user
    })
})


// login in existing user
const login = asyncErrorHandler( async(req, res, next) => {

    // checking whether the user provides the email & password
    const {email, password} = req.body
    if(!email || !password){
        const err = new CustomError('Please, provide Email and Password', 400)
        next(err)
        return
    }

    // checking whether the user exists or not
    const user = await userModel.findOne({email})

    // checking whether the password provided matches the one in the database
    const isMatch = await user.comparePassword(password, user.password)
    if(!isMatch || !user){

        const err = new CustomError('Invalid email or password', 400)
        next(err)
        return
    }

    res.status(200).json({
        status:'success',
        message:'Login sucessful'
    })
})


module.exports = {
    register,
    login,
}