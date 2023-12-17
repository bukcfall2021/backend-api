const createController = require('../../global/utils/createController');
const imageUtils = require('../../global/utils/firebase');

module.exports.get = createController(async (req, res) => {
    
    try {

        const path = `item/${req.params.key}`;
        const downloadURL = await imageUtils.getImage(path)
        return res.status(200).send({URL: downloadURL});
        
    } catch (error) {
        return res.status(500).send({error: error})
    }

});