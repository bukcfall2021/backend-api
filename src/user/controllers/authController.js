const createController = require('../../global/utils/createController');
const appConstants = require('../../global/constants/appConstants');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const imageUtil = require('../../global/utils/firebase');
const {v4} = require('uuid')

// api/user/auth/signup
module.exports.signup = createController(async (req, res) => {

    const User = req.app.locals.db.User;
    const Wallet = req.app.locals.db.Wallet;

    const data = req.body;

    if(!data || !data.name || !data.email || !data.password){
        return res.status(400).send({error: "Invalid Input"});
    }
    
    //Checking if User already exists 
    const findUser = await User.findOne({where: {email: data.email}});
    if (findUser != undefined){
        return res.status(401).send({error: "Email Already In Use"});
    }
    
    //Creating wallet and encrypting password
    const wallet = await Wallet.create();
    const encryptedPassword = await bcrypt.hash(data.password, 10);

    try {

        if(req.file){
            await imageUtil.putImage(key, req.file.buffer, req.file.mimetype);
        }
        const key = `user/${v4()}`;
        
        //Creating User and JWT
        const user = await User.create({
            name: data.name,
            email: data.email,
            password: encryptedPassword,
            phone: data?.phone || null,
            userIMG: req.file ? key : null,
            walletId: wallet.id
        });

        const token = jwt.sign({user: user}, appConstants.JWT_SECRET, {expiresIn: '10h'});
        return res.cookie('token', token, {httpOnly: true}).status(200).send();

    } catch (err) {

      await wallet.destroy();
      return res.status(500).send({error: err});

    }

});

// api/user/auth/login
module.exports.login = createController(async (req, res) => {

    const User = req.app.locals.db.User;
    const data = req.body;

    if(!data || !data.email || !data.password){
        return res.status(400).send({error: "Invalid Input"});
    }

    try {
        //Finding if User exists or not
        const user = await User.findOne({where: {email: data.email}});
        if(!user){
            return res.status(404).send({error: "User Doesn't Exist"});
        }
        //Validating password
        const passwordMatch = await bcrypt.compare(data.password, user.password);
        if(!passwordMatch){
            return res.status(401).send({error: "Incorrect Credentials"});
        }
        
        const token = jwt.sign({user: user}, appConstants.JWT_SECRET, {expiresIn: '10h'});
        return res.cookie('token', token, {httpOnly: true}).status(200).send({user: user});

    } catch (err) {

        return res.status(500).send({error: err});

    }

});