const createController = require('../../global/utils/createController');

module.exports.create = createController(async (req, res) => {

    const OrderedItem = req.app.locals.db.OrderedItem;
    const Order = req.app.locals.db.Order;
    const Cart = req.app.locals.db.Cart;
    const Promo = req.app.locals.db.Promo;
    const Item = req.app.locals.db.Item;
    const ItemVariant = req.app.locals.db.ItemVariant;
    const Variant = req.app.locals.db.Variant;

    const data = req.body;

    if(!data || !data.cartIds || !data.userId){
        return res.status(400).send({error: "Invalid Input"})
    }

    const now = new Date();
    const estimatedTime = new Date(now.getTime() + (30*60*1000));

    try {
        
        let carts = [];
        for (let i = 0; i < data.cartIds.length; i++){
            const cart = await Cart.findByPk(data.cartIds[i])
            if(cart.userId != data.userId){
                throw error;
            }
            carts.push(cart);
        }

        let promo = null
        if(data.promoCode){
            promo = await Promo.findOne({where: {code: data.promoCode}})
            promo = promo.expiryDate > now.getTime() ? null : promo; 
        }

        const order = await Order.create({
            userId: data.userId,
            promoId: promo?.id,
            total: 0,
            estimatedTime: estimatedTime
        });

        let total = 0
        for (let i = 0; i < carts.length; i++){

            let subtotal = 0
            let cart = carts[i]

            const item = await Item.findByPk(cart.itemId);
            const itemVariant = await ItemVariant.findOne({where: {itemId: cart.itemId, variantId: cart?.variantId}});
            
            if(cart.variantId && itemVariant){
                const variant = await Variant.findByPk(cart.variantId)
                subtotal = variant.extraCharge*cart.quantity
            }else{
                subtotal = item.price*cart.quantity
            }
            
            const orderedItem = await OrderedItem.create({
                orderId: order.id,
                itemId: cart.itemId,
                variantId: cart.variantId,
                quantity: cart.quantity,
                subtotal: subtotal
            })
            total += orderedItem.subtotal;
        }

        if(promo){
            total -= total*promo.discountPercentage
        }
        const updateOrder = await order.update({total: total});

        for (let i = 0; i < carts.length; i++){
            await Cart.destroy({where: {id: carts[i].id}});
        }

        return res.status(200).send({order: updateOrder, success: true});

    } catch (error) {
        return res.status(500).send({error: error});
    }


});

module.exports.delete = createController(async (req, res) => {

    const Order = req.app.locals.db.Order;
    const id = req.params.id;

    try {

        const order = await Order.findByPk(id);
        if(order){
            await order.destroy();
        }
        return res.status(200).send({success: true, message: "Order Rejected"});
        
    } catch (error) {
        return res.status(500).send({error: error});
    }

});

module.exports.getAll = createController(async (req, res) => {

    const Order = req.app.locals.db.Order;
    try {
        const orders = await Order.findAll();
        return res.status(200).send({orders: orders});        
    } catch (error) {
        return res.status(500).send({error: error})
    }

});

module.exports.getByOrderId = createController(async (req, res) => {

    const Order = req.app.locals.db.Order;
    const id = req.params.id;
    
    try {
        const order = await Order.findByPk(id);
        return res.status(200).send({order: order});
    } catch (error) {
        return res.status(500).send({error: error})
    }

});

module.exports.getbyUserId = createController(async (req, res) => {

    const Order = req.app.locals.db.Order;
    const User = req.app.locals.db.User;
    const id = req.params.id;
    
    try {

        const user = await User.findByPk(id);
        if(!user){
            return res.status(404).send({error: "Invalid Data"});
        }
        const orders = await Order.findAll({where: {userId: id}});
        return res.status(200).send({orders: orders});

    } catch (error) {
        return res.status(500).send({error: error})
    }

});