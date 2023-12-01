const { Sequelize } = require('sequelize')
const { sequelize } = require('../global/utils/connectToDB')

const Books = sequelize.define('book', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
    }

})

module.exports = Books