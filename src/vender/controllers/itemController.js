const createController = require('../../global/utils/createController');

// api/vender/item/create
module.exports.create = createController(async (req, res) => {

    const Item = req.app.locals.db.Item;
    const data = req.body;

    if(!data || !data.name || !data.description || !data.price || !data.itemIMG){
        return res.status(400).send({error: "Invalid Input"});
    }

    const itemFind = await Item.findOne({where: {name: data.name}});
    if(itemFind){
        return res.status(409).send({error: "Item Already Exists"});
    }

    try {
        //Creating item
        const item = await Item.create({
            name: data.name,
            description: data.description,
            price: data.price,
            isAvailable: data.isAvailable || false
        })
        return res.status(200).send({item: item});

    } catch (err) {
        return res.status(500).send({error: err});
    }

});