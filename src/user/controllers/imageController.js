const createController = require('../../global/utils/createController');
const imageUtil = require('../../global/utils/firebase');
const { v4 } = require('uuid');

module.exports.post = createController(async (req, res) => {

    const User = req.app.locals.db.User;
    const id = req.params.id;

    if(!req.file){
        return res.status(400).send({error: "Invalid or Insufficient Data"});
    }

    try {

        const user = await User.findByPk(id);
        if(user.userIMG){
            const deletedIMG = await imageUtil.deleteImage(user.userIMG);
            if(!deletedIMG){ throw error; }
        }

        const path = `user/${v4()}`
        const newUserIMG = await imageUtil.putImage(path, req.file.buffer, req.file.mimetype)
        if(!newUserIMG){
            throw error;
        }
        
        const newUser = await user.update({
            userIMG: path
        })
        return res.status(200).send({user: newUser});
        
    } catch (error) {
        return res.status(500).send({error: error});
    }
    
});