const express = require('express')
const controller = require('../controllers/menuController')

// initiating a router
const router = express.Router()

// endpoint to fetch all menu
router.get('/menu', controller.getAllMenu)

// endpoint to create new menu item
router.post('/menu', controller.createMenu)

// endpoint to place order
router.post('/order', controller.order)


// exporting the router
module.exports = router