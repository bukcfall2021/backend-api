const createController = require('../../global/utils/createController');
const imageUtils = require('../../global/utils/firebase');

module.exports.get = createController(async (req, res) => {
    
    const path = `item/${req.params.key}`;
    imageUtils.getImage(path)
    .then((downloadURL) => {
        return res.status(200).send({URL: downloadURL});
    })
    .catch((error) => {
        return res.status(500).send({error: err});
    })

});