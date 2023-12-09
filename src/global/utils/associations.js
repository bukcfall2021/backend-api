const createAssociations = async (models) => {
    
    //User Associations
    models.User.belongsToMany(models.Address, {through: 'user-addresses', timestamps: false});
    models.User.hasMany(models.Review);
    models.User.hasOne(models.Wallet);

    //Promo Associations
    models.AvailedPromo.hasMany(models.User);
    models.AvailedPromo.hasMany(models.Promo);

    //Menu Item Associations
    models.Item.belongsToMany(models.Variant, {through: 'item-variants', timestamps: false});

    //Ordered Item Associations
    models.Cart.hasMany(models.OrderedItem);
    models.Item.belongsToMany(models.OrderedItem, {through: 'item-ordered_items', timestamps: false});
    models.OrderedItem.belongsToMany(models.Order, {through: 'order-ordered_items', timestamps: false});

    //Order Associations
    models.Order.hasOne(models.OrderStatus);
    models.Order.belongsToMany(models.Rider, {through: 'rider-orders', timestamps: false});

};

module.exports = {createAssociations};