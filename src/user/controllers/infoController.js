const createController = require('../../global/utils/createController');
const bcrypt = require('bcrypt');

module.exports.edit = createController(async (req, res) => {

    const User = req.app.locals.db.User;
    const data = req.body;

    if(!data || !data.id){
        return res.status(400).send({error: "Insufficient or Invalid Data"});
    }

    try {

        const user = await User.findByPk(data.id);
        if(!user){
            return res.status(400).send({error: "User Doesn't Exist"});
        }

        const updatedUser = await user.update({
            name: data?.name,
            email: data?.email,
            phone: data?.phone
        })
        if(!updatedUser){
            throw error;
        }
        return res.status(200).send({success: true, user: updatedUser});
        
    } catch (error) {
        return res.status(500).send({error: error});
    }

});

module.exports.editPassword = createController(async (req, res) => {

    const User = req.app.locals.db.User;
    const data = req.body;

    if(!data || !data.oldPassword || !data.id || !data.newPassword){
        return res.status(400).send({error: "Invalid Data"});
    }

    try {

        const user = await User.findByPk(data.id);
        if(!user){
            return res.status(400).send({error: "User Doesn't Exist"});
        }

        const isValid = await bcrypt.compare(data.oldPassword, user.password);
        if(!isValid){
            return res.status(400).send({error: "Old Password is Invalid"});
        }

        const encryptedPassword = await bcrypt.hash(data.newPassword, 10);

        const newUser = await user.update({password: encryptedPassword});
        if(!newUser){
            throw error;
        }
        return res.status(200).send({sucess: true, user: newUser});
        
    } catch (error) {
        return res.status(500).send({error: error});
    }

});

module.exports.addAddress = createController(async (req, res) => {

    const User = req.app.locals.db.User;
    const Address = req.app.locals.db.Address;
    const data = req.body;

    if(!data || !data.userId || !data.address || !data.city){
        return res.status(400).send({error: "Insufficient or Invalid Data"});
    }

    try {

        const user = await User.findByPk(data.userId);
        if(!user){
            return res.status(400).send({error: "User Doesn't Exist"});
        }

        const address = await Address.create({
            address: data.address,
            city: data.city,
            landmark: data?.landmark,
            userId: data.userId,
            isDefault: data?.isDefault
        })
        return res.status(200).send({success: true, address: address});
        
    } catch (error) {
        return res.status(500).send({error: error});
    }

});

module.exports.deleteAddress = createController(async (req, res) => {

    const Address = req.app.locals.db.Address;
    const id = req.params.id;

    if(!id){
        return res.status(400).send({error: "Insufficient or Invalid Data"});
    }

    try {

        const address = await Address.findByPk(id);
        if(!address){
            return res.status(400).send({error: "Address Doesn't Exist"});
        }

        const deleted = await address.destroy();
        if(!deleted){
            throw error;
        }
        return res.status(200).send({success: true, message: "Address Deleted"});
        
    } catch (error) {
        return res.status(500).send({error: error});
    }

});