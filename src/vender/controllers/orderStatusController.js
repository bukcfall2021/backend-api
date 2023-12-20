const createController = require('../../global/utils/createController');

module.exports.create = createController(async (req, res) => {

    const OrderStatus = req.app.locals.db.OrderStatus;
    const data = req.body;

    try {
        const orderStatus = await OrderStatus.create({
            statusName: data.statusName
        });
        return res.status(200).send({status: orderStatus});
    } catch (error) {
        res.status(500).send({error: error});
    }

});