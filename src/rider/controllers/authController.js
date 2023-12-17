const createController = require('../../global/utils/createController');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const appConstants = require('../../global/constants/appConstants');

// api/rider/auth/signup
module.exports.signup = createController(async (req, res) => {

    const Rider = req.app.locals.db.Rider;
    const data = req.body;

    if(!data.name || !data.email || !data.password || !data.phone){
        return res.status(400).send({error: "Insufficient Data"});
    }

    const riderFound = await Rider.findOne({where: {email: data.email}})
    if(riderFound){
        return res.status(409).send({error: 'Email Already In Use'});
    }

    const encryptedPassword = await bcrypt.hash(data.password, 10);

    try {

        const rider = await Rider.create({
            name: data.name,
            email: data.email,
            password: encryptedPassword,
            phone: data.phone,
        })
        const token = jwt.sign({rider: rider}, appConstants.JWT_SECRET)
        return res.status(200).send().cookie('token', token, {httpOnly: true});
        
    } catch (err) {
        return res.status(500).send({error: err});
    }

});

// api/rider/auth/login
module.exports.login = createController(async (req, res) => {

    const Rider = req.app.locals.db.Rider;
    const data = req.body;

    if(!data || !data.email || !data.password){
        return res.status(400).send({error: "Invalid Input"});
    }

    try {
        //Finding if Rider exists or not
        const rider = await Rider.findOne({where: {email: data.email}});
        if(!rider){
            return res.status(404).send({error: "Rider Doesn't Exist"});
        }
        //Validating password
        const passwordMatch = await bcrypt.compare(data.password, rider.password);
        if(!passwordMatch){
            return res.status(401).send({error: "Incorrect Credentials"});
        }
        
        const token = jwt.sign({rider: rider}, appConstants.JWT_SECRET);
        return res.cookie('token', token, {httpOnly: true}).status(200).send({rider: rider});

    } catch (err) {

        return res.status(500).send({error: err});

    }

});