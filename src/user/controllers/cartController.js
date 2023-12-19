const cartController = require('../../global/utils/createController');

// api/user/cart/create
module.exports.create = cartController(async (req, res) => {

    const Cart = req.app.locals.db.Cart;
    const data = req.body;

    if(!data || !data.itemID || !data.userID || !data.quantity){
        return res.status(400).send({error: "Invalid Input"});
    }

    const cartFind = await Cart.findOne({where: {itemID: data.itemID}});
    if(cartFind){
    // quantity is incremented if duplicate item is added to cart
        try {
            //Updating cart
            const cart = await Cart.update({
                quantity: data.quantity
            })
            return res.status(200).send({cart: cart});
    
        } catch (err) {
            return res.status(500).send({error: err});
        }
    }

    try {
        //Creating cart
        const cart = await Cart.create({
            itemID: data.itemID,
            quantity: data.quantity
        })
        return res.status(200).send({cart: cart});

    } catch (err) {
        return res.status(500).send({error: err});
    }

});

// api/user/cart/update
module.exports.update = cartController(async (req, res) => {

    const Cart = req.app.locals.db.Cart;
    const data = req.body;

    if(!data || !data.itemID || !data.quantity){
        return res.status(400).send({error: "Invalid Input"});
    }

    const cartFind = await Cart.findOne({where: {itemID: data.itemID}});
    if(!cartFind){
        return res.status(404).send({error: "Cart Not Found"});
    }

    try {
        //Updating cart
        const cart = await Cart.update({
            quantity: data.quantity
        })
        return res.status(200).send({cart: cart});

    } catch (err) {
        return res.status(500).send({error: err});
    }

});

// api/user/cart/delete
module.exports.delete = cartController(async (req, res) => {

    const Cart = req.app.locals.db.Cart;
    const data = req.body;

    if(!data || !data.itemID){
        return res.status(400).send({error: "Invalid Input"});
    }

    const cartFind = await Cart.findOne({where: {itemID: data.itemID}});
    if(!cartFind){
        return res.status(404).send({error: "Cart Not Found"});
    }

    try {
        //Deleting cart
        const cart = await Cart.destroy({where: {itemID: data.itemID}});
        return res.status(200).send({cart: cart});

    } catch (err) {
        return res.status(500).send({error: err});
    }

});