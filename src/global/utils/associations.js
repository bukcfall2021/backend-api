const createAssociations = async (models) => {
    
    //User Associations
    models.User.hasMany(models.Address);
    models.Address.belongsTo(models.User);
    models.User.hasMany(models.Review);
    models.Review.belongsTo(models.User);
    models.Wallet.hasOne(models.User);

    //Promo Associations
    models.AvailedPromo.belongsTo(models.User);
    models.User.hasMany(models.AvailedPromo);
    models.AvailedPromo.belongsTo(models.Promo);
    models.Promo.hasMany(models.AvailedPromo);

    //Menu Item Associations
    models.Variant.belongsToMany(models.Item, {through: 'item-variants', timestamps: false});

    //Cart Associations
    models.User.hasMany(models.Cart);
    models.Cart.belongsTo(models.User);

    //Ordered Item Associations
    models.Item.hasOne(models.OrderedItem);
    models.OrderedItem.belongsTo(models.Order);
    models.Order.hasMany(models.OrderedItem);
    
    //Order Associations
    models.OrderStatus.hasOne(models.Order);
    models.Rider.hasOne(models.Order);

};

module.exports = {createAssociations};