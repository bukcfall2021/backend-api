const jwt = require('jsonwebtoken');
const createController = require('../utils/createController');

const verifyJWT = createController(async (req, res, next) => {

    //TODO: Add JWT Verification

})

module.exports = verifyJWT