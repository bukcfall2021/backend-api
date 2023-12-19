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