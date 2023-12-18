const promoController = require('../../global/utils/createController');

// api/vendor/promo/get
module.exports.get = promoController(async (req, res) => {
    const Promo = req.app.locals.db.Promo;
    const id = req.params.id;

    if (!id) {
        return res.status(400).send({error: "Invalid Input"});
    }

    try {
        const promo = await Promo.findOne({where: {id: id}});
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
    const data = req.body;

    if(!data || !data.discountPercentage || !data.expiryDate || !data.code){
        return res.status(400).send({error: "Invalid Input"});
    }

    try {

        const promo = await Promo.create({
            expiryDate: data.expiryDate,
            discountPercentage: data.discountPercentage,
            code: data.code
        });
        return res.status(200).send({promo: promo});

    } catch (err) {
        return res.status(500).send({error: err});
    }
});

// api/vendor/promo/update
module.exports.update = promoController(async (req, res) => {

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

        const updatedPromo = await promo.update({
            expiryDate: data?.expiryDate,
            discountPercentage: data?.discountPercentage,
            code: data?.code
        })
        return res.status(200).send({promo: updatedPromo});

    } catch (err) {
        return res.status(500).send({error: err});
    }
});

// api/vendor/promo/delete
module.exports.delete = promoController(async (req, res) => {

    const Promo = req.app.locals.db.Promo;
    const id = req.params.id;

    if(!id){
        return res.status(400).send({error: "Invalid Input"});
    }

    try {
        const promo = await Promo.findOne({where: {id: id}});
        if(!promo){
            return res.status(404).send({error: "Promo Not Found"});
        }

        const promoDestroy = await promo.destroy();
        if(!promoDestroy){
            throw error;
        }
        return res.status(200).send({success: true, promo: promoDestroy});

    } catch (err) {
        return res.status(500).send({error: err});
    }
});