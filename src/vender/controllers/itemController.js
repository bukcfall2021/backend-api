const createController = require('../../global/utils/createController');
const imageUtil = require('../../global/utils/firebase');
const { v4 } = require('uuid');

// api/vender/item/create
module.exports.create = createController(async (req, res) => {

    const Item = req.app.locals.db.Item;
    const data = req.body;

    if(!data || !data.name || !data.description || !data.price || !req.file){
        return res.status(400).send({error: "Invalid Input"});
    }

    const itemFind = await Item.findOne({where: {name: data.name}});
    if(itemFind){
        return res.status(409).send({error: "Item Already Exists"});
    }

    const key = `item/${v4()}`;

    try {
        //Uploading image
        imageUtil.putImage(key, req.file.buffer, req.file.mimetype)
        .then(async (snapshot) => {
            //Creating item
            const item = await Item.create({
                name: data.name,
                description: data.description,
                price: data.price,
                itemIMG: key,
                isAvailable: data.isAvailable || false
            })
            return res.status(200).send({item: item, snapshot: snapshot});
        })
        .catch((error) => {
            return res.status(500).send({error: err});
        })

    } catch (err) {
        return res.status(500).send({error: err});
    }

});