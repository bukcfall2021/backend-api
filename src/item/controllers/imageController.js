const createController = require('../../global/utils/createController');
const imageUtils = require('../../global/utils/firebase');

module.exports.get = createController(async (req, res) => {
    
    const path = `item/${req.params.key}`;
    const downloadURL = await imageUtils.getImage(path)
    return res.status(200).send({URL: downloadURL});

});