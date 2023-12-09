const { Sequelize, DataTypes } = require("sequelize");

// Review model
const Review = {
    reviewID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    userID: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    comment: DataTypes.STRING,
    date: DataTypes.DATE
};

module.exports = Review;