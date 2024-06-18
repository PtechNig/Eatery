const express = require('express')
const controller = require('../controllers/userController')

// initiating a router
const router = express.Router()


// endpoint to register a new user
router.post('/register', controller.register)

// endpoint to login an existing user
router.post('/login', controller.login )



// exporting the router
module.exports = router