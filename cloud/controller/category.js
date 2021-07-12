const category = require('../models/category');

exports.create = ( req, res) => {
    console.log("req.body", req.body);
    
    const category = new Category(req.body);

    category.save((err, category) => {
        if(err){
            return res.status(400).json({
                err
            })
        }
        res.json({
            category
        })
    })
}