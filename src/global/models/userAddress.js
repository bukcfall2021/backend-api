const {DataTypes} = require('sequelize');

const UserAddress = {

    userId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        }
    },
    addressId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'addresses',
            key: 'id',
        }
    },

};

module.exports = UserAddress;