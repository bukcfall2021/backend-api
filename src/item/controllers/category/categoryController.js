const createController = require('../../../global/utils/createController');

// api/item/category/all
module.exports.get = createController(async (req, res) => {

    const Category = req.app.locals.db.Category;
    try {
        
        const category = await Category.findAll();
        return res.status(200).send({category: category});

    } catch (err) {
        return res.status(500).send({error: err});
    }

});