const { Sequelize, DataTypes } = require("sequelize");

// Review model
const Review = {
    reviewID: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4,
    },
    userID: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    comment: DataTypes.STRING,
    date: DataTypes.DATE
};

module.exports = Review;