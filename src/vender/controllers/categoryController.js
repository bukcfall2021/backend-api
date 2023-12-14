const createController = require('../../global/utils/createController');

// api/vender/category/create
module.exports.create = createController(async (req, res) => {

    const Category = req.app.locals.db.Category;
    const data = req.body.category;

    //Checking if category is undefined
    if(!data || data.length === 0){
        return res.status(400).send({error: "Invalid Input"});
    }

    //Checking if category already exits
    const findCategory = await Category.findOne({where: {category: data}});
    if (findCategory){
        return res.status(409).send({message: "Category Already Exists", category: findCategory});
    }

    try {
        //Creating Category
        const category = await Category.create({
            category: data
        });
        return res.status(200).send({category: category});

    } catch (err) {

        return res.status(500).send({error: err});
    }

});

module.exports.get = createController(async (req, res) => {

    const Category = req.app.locals.db.Category;
    try {
        
        const category = await Category.findAll();
        return res.status(200).send({category: category});

    } catch (err) {
        return res.status(500).send({error: err});
    }

});