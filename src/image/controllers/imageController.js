const createController = require('../../global/utils/createController');
const imageUtil = require('../../global/utils/firebase');

// /api/image/get/:folder/:key
module.exports.get = createController(async (req, res) => {

    try {
        
        const key = `${req.params.folder}/${req.params.key}`
        const url = await imageUtil.getImage(key);
        return res.status(200).send({url: url});
        
    } catch (error) {
        res.status(500).send({error: error});
    }

});