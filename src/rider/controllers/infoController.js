const createController = require('../../global/utils/createController');
const bcrypt = require('bcrypt');

module.exports.edit = createController(async (req, res) => {

    const Rider = req.app.locals.db.Rider;
    const data = req.body;

    if(!data || !data.id){
        return res.status(400).send({error: 'Invalid Data'})
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

    if(!data || !data.oldPassword || !data.id || !data.newPassword){
        return res.status(400).send({error: "Invalid Data"});
    }

    try {

        const rider = await Rider.findByPk(data.id);
        if(!rider){
            return res.status(400).send({error: "Rider Doesn't Exist"});
        }

        const isValid = await bcrypt.compare(data.oldPassword, rider.password);
        if(!isValid){
            return res.status(400).send({error: "Old Password is Invalid"});
        }

        const encryptedPassword = await bcrypt.hash(data.newPassword, 10);

        const newRider = await rider.update({password: encryptedPassword});
        if(!newRider){
            throw error;
        }
        return res.status(200).send({sucess: true, rider: newRider});
        
    } catch (error) {
        return res.status(500).send({error: error});
    }

});