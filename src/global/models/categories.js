const {DataTypes, UUID} = require('sequelize');

const Category = {

    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },


};

module.exports = Category;