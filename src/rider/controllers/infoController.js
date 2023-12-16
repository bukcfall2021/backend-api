const createController = require('../../global/utils/createController');

module.exports.edit = createController(async (req, res) => {

    const Rider = req.app.locals.db.Rider;
    const data = req.body;

    if(!data){
        return res.status(400).send({error: 'Invalid Input'})
    }

    try {

        const rider = await Rider.findByPk(data.id);
        if(!rider){
            return res.status(400).send({error: "Rider Doesn't Exist"});
        }
        
        const updateRider = await rider.update({
            name: data?.name,
            email: data?.email,
            phone: data?.phone,
            isAvailable: data?.isAvailable
        });
        if(!updateRider){
            throw error;
        }
        return res.status(200).send({info: updateRider});
        
    } catch (error) {
        return res.status(500).send({error: error})
    }

});

module.exports.editPassword = createController(async (req, res) => {

    const Rider = req.app.locals.db.Rider;
    const data = req.body;

    

});