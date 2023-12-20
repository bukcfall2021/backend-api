const itemController = require('../../global/utils/createController');
const imageUtil = require('../../global/utils/firebase');
const { v4 } = require('uuid');

// api/vender/item/create
module.exports.create = itemController(async (req, res) => {

    const Item = req.app.locals.db.Item;
    const data = req.body;

    if(!data || !data.name || !data.description || !data.price || !req.file){
        return res.status(400).send({error: "Invalid Input"});
    }

    const key = `item/${v4()}`;
    try {
        const itemFind = await Item.findOne({where: {name: data.name}});
        if(itemFind){
            return res.status(409).send({error: "Item Already Exists", item: itemFind});
        }
        //Uploading image
        try{
            await imageUtil.putImage(key, req.file.buffer, req.file.mimetype)
        }catch(error){
            throw error;
        }
        //Creating item
        const item = await Item.create({
            name: data.name,
            description: data.description,
            price: data.price,
            itemIMG: key,
            isAvailable: data?.isAvailable,
            categoryId: data?.categoryId
        })
        return res.status(200).send({item: item, success: true});

    } catch (error) {
        return res.status(500).send({error: error});
    }

});

// api/vender/item/update
module.exports.update = itemController(async (req, res) => {

    const Item = req.app.locals.db.Item;
    const data = req.body;
    const id = req.params.id;

    if(!data || !data.id || !data.name || !data.description || !data.price){
        return res.status(400).send({error: "Invalid Input"});
    }

    const itemFind = await Item.findOne({where: {id: data.id}});
    if(!itemFind){
        return res.status(404).send({error: "Item Not Found"});
    }

    try {
        //Updating item
        const item = await Item.update({
            name: data.name,
            description: data.description,
            price: data.price,
            isAvailable: data.isAvailable || false
        }, {where: {id: data.id}})
        return res.status(200).send({item: item});

    } catch (err) {
        return res.status(500).send({error: err});
    }

});

// api/vender/item/delete
module.exports.delete = itemController(async (req, res) => {

    const Item = req.app.locals.db.Item;
    const data = req.body;
    const id = req.params.id;

    if(!data || !data.id){
        return res.status(400).send({error: "Invalid Input"});
    }

    const itemFind = await Item.findOne({where: {id: data.id}});
    if(!itemFind){
        return res.status(404).send({error: "Item Not Found"});
    }

    try {
        //Deleting item
        const item = await Item.destroy({where: {id: data.id}})
        return res.status(200).send({item: item});

    } catch (err) {
        return res.status(500).send({error: err});
    }

});