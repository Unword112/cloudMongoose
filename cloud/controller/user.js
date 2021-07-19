const User = require('../models/user');

exports.signup = (req , res) => {
    console.log("req.body" , req.body);

    const user = new User(req.body);
    
    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                err
            })
        }
        res.json({
            user
        })

    })
}

exports.users = (req , res) => {
    User.find({}).exec((err, data) => {
        if(err) {
            return res.status(400).json({
                err
            })
        }
        res.json(data);
    })
}

exports.profile = (req , res) => {
    //let age = 19;
    //res.send("age " + age);

    res.json({
        name: "Nathakith",
        age: "19",
        email: "pog123@hotmail.co.uk",

    },
    /*{
        name: "Prasopchok Wattanaolan",
        age: 300,
        job: "defeated slime 300 years ago",
        email: "FrameTheBest@yahoo.com",
    }*/
    )
}