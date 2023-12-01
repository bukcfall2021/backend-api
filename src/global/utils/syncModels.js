const Users = require('../../models/users')
const Books = require('../../models/books')

const syncModels = async (sequelize) => {

    Users.hasMany(Books)
    Books.hasOne(Users)

    sequelize.sync({ force: true })
    .then((result) => {
        console.log("Models Synced")
    })
    .catch(err => {
        console.log("Error Occured: ", err)
    })

}

module.exports = syncModels