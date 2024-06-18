const menuModel = require('../models/menuModel')
const asyncErrorHandler = require('../errorHandler/asyncErrorHandler')
const CustomError = require('../errorHandler/customError')


// function to place order
const order = asyncErrorHandler(async (req, res, next) => {
    const { id, quantity } = req.body;

    // Check if id and quantity are provided
    if (!id || !quantity) {
        const err = new CustomError('Menu id & quantity are required to place order', 400);
        next(err);
        return;
    }

    
    // Find the menu by ID
    const menu = await menuModel.findById(id)

    // If the menu does not exist
    if (!menu) {
        const err = new CustomError('Menu not found', 404);
        next(err);
        return;
    }

    res.status(200).json({
        status: 'success',
        message: 'Order placed successfully, below is the detail',
        menu,
        quantity,
        totalPrice: menu.price * quantity,
    });

});


// function to create menu
const createMenu = asyncErrorHandler( async (req, res, next) => {
        const {name, description, price} = req.body

        const item = await menuModel.findOne({name})
        if(item){
            const err = new CustomError('Menu already exists', 400)
            next(err)
            return
        }

        const menu = await menuModel.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        })
        res.status(200).json({
            status:'success',
            menu
        })
})



// function to get all menu items
const getAllMenu = asyncErrorHandler( async (req, res, next) => {
 
        const menu = await menuModel.find({})
        res.status(200).json({
            status:'success',
            menu
        })
})

// exporting the functions
module.exports = {
    order,
    createMenu,
    getAllMenu
}