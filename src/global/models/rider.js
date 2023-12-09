const { Sequelize, DataTypes } = require("sequelize");

// Rider model
const Rider = {
    riderID: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    isAvailable: DataTypes.BOOLEAN
};

module.exports = Rider;