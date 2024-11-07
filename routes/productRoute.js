const express = require('express')
const controller = require('../controllers/productController')
const multer = require('multer')


// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// initiating a router
const router = express.Router()

// endpoint to fetch all product
router.get('/product', controller.getAllProduct)

// endpoint to get product by id
router.get('/product/:id', controller.getProduct)

// endpoint to create new product item
router.post('/product', upload.single('image'), controller.createProduct)

// endpoint to place order
router.post('/order', controller.order)


// exporting the router
module.exports = router