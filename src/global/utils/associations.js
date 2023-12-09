const createAssociations = async (models) => {
    
    //User Associations
    models.User.belongsToMany(models.Address, {through: models.UserAddress});
    models.User.hasMany(models.Review);
    models.User.hasOne(models.Wallet);

    //Promo Associations
    models.AvailedPromo.hasMany(models.User);
    models.AvailedPromo.hasMany(models.Promo);

    //Menu Item Associations
    models.Item.belongsToMany(models.Variant, {through: models.ItemVariant});

    //Ordered Item Associations
    models.Cart.hasMany(models.OrderedItem);
    models.Item.belongsToMany(models.OrderedItem, {through: models.ItemOrderedItem});
    models.OrderedItem.belongsToMany(models.Order, {through: models.OrderOrderedItem});
    
    //Order Associations
    models.Order.hasOne(models.OrderStatus);
    models.Order.hasMany(models.Rider);

};

module.exports = {createAssociations};