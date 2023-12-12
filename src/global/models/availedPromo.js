const {DataTypes, Sequelize} = require('sequelize');

const AvailedPromo = {

    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'users',
            key: 'id',
        }
    },
    promoId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'promos',
            key: 'id',
        }
    },
    availedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    availed: {
        type: DataTypes.BOOLEAN,
        allowNull: false, 
        defaultValue: false,
    }

};

module.exports = AvailedPromo