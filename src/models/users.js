const { Sequelize } = require('sequelize')
const { sequelize } = require('../global/utils/connectToDB')

const Users = sequelize.define('user', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
    }

})

module.exports = Users