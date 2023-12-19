const createController = require('../../global/utils/createController');

module.exports.getById = createController(async (req, res) => {

    const Item = req.app.locals.db.Item;

    try {

        const item = await Item.findByPk(req.params.id);
        if(!item) throw error;
        return res.status(200).send({item: item}); 
        
    } catch (error) {
        res.status(500).send({error: error});
    }

})