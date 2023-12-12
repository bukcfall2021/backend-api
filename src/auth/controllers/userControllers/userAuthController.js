const createController = require('../../../global/utils/createController');
const appConstants = require('../../../global/constants/appConstants');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//api/auth/user/signup
module.exports.signup = createController(async (req, res) => {

    const User = req.app.locals.db.User;
    const Wallet = req.app.locals.db.Wallet;

    const data = req.body;

    //Checking if User already exists 
    const findUser = await User.findOne({where: {email: data.email}});
    if (findUser != undefined){
        return res.status(401).send({error: "Email Already In Use"});
    }
    
    //Creating wallet and encrypting password
    const wallet = await Wallet.create();
    const encryptedPassword = await bcrypt.hash(data.password, 10);

    try {
        //Creating User and JWT
        const user = await User.create({
            name: data.name,
            email: data.email,
            password: encryptedPassword,
            phone: data?.phone || null,
            userIMG: data?.img || null,
            walletId: wallet.id
        });
        const token = jwt.sign({user: user}, appConstants.JWT_SECRET);
        return res.cookie('token', token, {httpOnly: true}).status(200).send();

    } catch (err) {

      await wallet.destroy();
      return res.status(500).send({error: err});

    }

});