const productModel = require('../models/productModel')
const asyncErrorHandler = require('../errorHandler/asyncErrorHandler')
const CustomError = require('../errorHandler/customError')



// function to place order
const order = asyncErrorHandler(async (req, res, next) => {
    const { id, quantity } = req.body;

    // Check if id and quantity are provided
    if (!id || !quantity) {
        const err = new CustomError('product id & quantity are required to place order', 400);
        next(err);
        return;
    }

    
    // Find the product by ID
    const product = await productModel.findById(id)

    // If the product does not exist
    if (!product) {
        const err = new CustomError('product not found', 404);
        next(err);
        return;
    }

    res.status(200).json({
        status: 'success',
        message: 'Order placed successfully, below is the detail',
        product,
        quantity,
        totalPrice: product.price * quantity,
    });

});


// function to create product
const createProduct = asyncErrorHandler( async (req, res, next) => {
        const {name, description, brand, price, category, features} = req.body

        const item = await productModel.findOne({name})
        if(item){
            const err = new CustomError('product already exists', 400)
            next(err)
            return
        }

        const product = await productModel.create({
            name,
            description,
            brand,
            price,
            category,
            features: features ? features.split(',').map(f => f.trim()) : [],
            image: req.file.path
        })
        res.status(200).json({
            status:'success',
            product
        })
})



// function to get all product items
const getAllProduct = asyncErrorHandler( async (req, res, next) => {
 
        const product = await productModel.find({})
        res.status(200).json({
            status:'success',
            product
        })
})


// function to fetch single
const getProduct = asyncErrorHandler( async (req, res, next) => {
    
    const product = await productModel.findById(req.params.id)

    res.status(200).json({
        status:'success',
        product
    })
})

// exporting the functions
module.exports = {
    order,
    createProduct,
    getAllProduct,
    getProduct
}