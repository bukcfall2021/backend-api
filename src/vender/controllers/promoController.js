const promoController = require('../../global/utils/createController');

// api/vendor/promo/get
module.exports.get = promoController(async (req, res) => {
    const Promo = req.app.locals.db.Promo;
    const data = req.query;

    if (!data || !data.id) {
        return res.status(400).send({error: "Invalid Input"});
    }

    try {
        const promo = await Promo.findOne({where: {id: data.id}});
        if (!promo) {
            return res.status(404).send({error: "Promo Not Found"});
        }

        return res.status(200).send({promo: promo});
    } catch (err) {
        return res.status(500).send({error: err});
    }
});

// api/vendor/promo/create
module.exports.create = promoController(async (req, res) => {

    const Promo = req.app.locals.db.Promo;
    const Item = req.app.locals.db.Item;
    const data = req.body;

    if(!data || !data.discountPercentage || !data.expiryDate || !data.code){
        return res.status(400).send({error: "Invalid Input"});
    }

    const itemFind = await Item.findOne({where: {id: data.itemId}});
    if(!itemFind){
        return res.status(404).send({error: "Item Not Found"});
    }

    try {
        const promo = await Promo.create(data);
        return res.status(200).send({promo: promo});
    } catch (err) {
        return res.status(500).send({error: err});
    }
});

// api/vendor/promo/update
module.exports.update = promoController(async (req, res) => {

    const Promo = req.app.locals.db.Promo;
    const data = req.body;

    if(!data || !data.discountPercentage || !data.expiryDate || !data.code){
        return res.status(400).send({error: "Invalid Input"});
    }

    try {
        const promo = await Promo.findOne({where: {id: data.id}});
        if(!promo){
            return res.status(404).send({error: "Promo Not Found"});
        }

        promo.discountPercentage = data.discountPercentage;
        promo.expiryDate = data.expiryDate;
        promo.code = data.code;
        await promo.save();

        return res.status(200).send({promo: promo});
    } catch (err) {
        return res.status(500).send({error: err});
    }
});

// api/vendor/promo/delete
module.exports.delete = promoController(async (req, res) => {

    const Promo = req.app.locals.db.Promo;
    const data = req.body;

    if(!data || !data.id){
        return res.status(400).send({error: "Invalid Input"});
    }

    try {
        const promo = await Promo.findOne({where: {id: data.id}});
        if(!promo){
            return res.status(404).send({error: "Promo Not Found"});
        }

        const promoToReturn = {...promo.dataValues}; // Copy the promo data before destroying it

        await promo.destroy();

        return res.status(200).send({promo: promoToReturn});
    } catch (err) {
        return res.status(500).send({error: err});
    }
});