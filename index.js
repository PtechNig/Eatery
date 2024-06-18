const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config({path:'./config.env'})
const menuRoute = require('./routes/menuRoute')
const userRoute = require('./routes/userRoute')


// DB connection
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connection successful')
}).catch(err => {
    console.log(err)
})


// connecting .env file
const PORT = process.env.PORT || 8080

// default route
app.get('/', (req, res) =>{
    res.status(200).json({
        status:'success',
        message:'Welcome to my Eatery App'
    })
})

/*
    setting up middlewares 
    body parser middlewares
 */
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes middlewares
app.use('/api/v1/eatery', menuRoute)
app.use('/api/v1/eatery', userRoute)


// page not found route 
app.all('*', (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on this server`, 404)
    next(err)
})

// error handler middleware
app.use((error, req, res, next ) =>{
    error.statusCode = error.statusCode || 500
    error.status = error.status || 'error'
    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message
    })

    next()
})



// listening to the port created
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})