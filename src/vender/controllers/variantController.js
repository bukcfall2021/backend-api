const variantController = require('../../global/utils/createController');
const imageUtil = require('../../global/utils/firebase');
const { v4 } = require('uuid');

// api/vendor/variant/get
module.exports.get = variantController(async (req, res) => {

    const Variant = req.app.locals.db.Variant;
    const ItemVariant = req.app.locals.db.ItemVariant;
    const id = req.params.id;

    if (!id) {
        return res.status(400).send({error: "Invalid Input"});
    }

    try {
        const itemVariants = await ItemVariant.findAll({where: {itemId: id}});
        if (!itemVariants) {
            return res.status(404).send({error: "Item Variants Not Found"});
        }

        const variants = [];
        for (let itemVariant of itemVariants) {
            const variant = await Variant.findOne({where: {id: itemVariant.variantId}});
            if (variant) {
                variants.push(variant);
            }
        }
        return res.status(200).send({variants: variants});

    } catch (err) {
        return res.status(500).send({error: err});
    }
});

// api/vender/variant/create
module.exports.create = variantController(async (req, res) => {

    const Variant = req.app.locals.db.Variant;
    const Item = req.app.locals.db.Item;
    const ItemVariant = req.app.locals.db.ItemVariant;
    const data = req.body;

    if(!data || !data.variantName || !data.extraCharge || !data.itemId){
        return res.status(400).send({error: "Invalid Input"});
    }

    const itemFind = await Item.findOne({where: {id: data.itemId}});
    if(!itemFind){
        return res.status(404).send({error: "Item Not Found"});
    }

    const variantFind = await Variant.findOne({where: {variantName: data.variantName}});
    if(variantFind){
        return res.status(409).send({error: "Variant Already Exists", variant: variantFind});
    }

    const key = `variant/${v4()}`;
    try {
        //Uploading image
        if(req.file){
            const snapshot = await imageUtil.putImage(key, req.file.buffer, req.file.mimetype)
        }
        //creating variant
        const variant = await Variant.create({
            variantName: data.variantName,
            itemIMG: req.file ? key : null,
            extraCharge: data.extraCharge,
            isAvailable: data?.isAvailable, 
            isDefault: data?.isDefault 
        })
        const itemVariant = await ItemVariant.create({
            itemId: data.itemId,
            variantId: variant.id
        })
        return res.status(200).send({variant: variant, itemVariant: itemVariant});

    } catch (err) {
        return res.status(500).send({error: err});
    }
});

// api/vendor/variant/update
module.exports.update = variantController(async (req, res) => {

    const Variant = req.app.locals.db.Variant;
    const data = req.body;
    const id = req.params.id;

    if (!data || !data.id) {
        return res.status(400).send({error: "Invalid Input"});
    }

    try {
        const variantFind = await Variant.findOne({where: {id: data.id}});
        if (!variantFind) {
            return res.status(404).send({error: "Variant Not Found"});
        }
        // Updating variant
        const updatedVariant = await variantFind.update({
            variantName: data?.variantName,
            itemIMG: data?.itemIMG,
            extraCharge: data?.extraCharge,
            isAvailable: data?.isAvailable,
            isDefault: data?.isDefault
        });
        return res.status(200).send({variant: updatedVariant});

    } catch (err) {
        return res.status(500).send({error: err});
    }
});

// api/vendor/variant/delete
module.exports.delete = variantController(async (req, res) => {

    const Variant = req.app.locals.db.Variant;
    const id = req.params.id;

    if (!id) {
        return res.status(400).send({error: "Invalid Input"});
    }

    try {
        const variantFind = await Variant.findByPk(id);
        if (!variantFind) {
            return res.status(404).send({error: "Variant Not Found"});
        }
        // Deleting variant
        const variantDestroy = await variantFind.destroy();
        if(!variantDestroy){
            throw error;
        }
        try {
            const deleteIMG = await imageUtil.deleteImage(variantFind.itemIMG);
        } catch (error) {
            const variant = await variantFind.restore();
            throw error;
        }
        return res.status(200).send({success: true, message: "Variant Deleted Successfully"});

    } catch (err) {
        return res.status(500).send({error: err});
    }
});