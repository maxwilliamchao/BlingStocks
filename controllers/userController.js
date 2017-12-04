const db = require("../models");
// const crypt = require("../crypt/crypt");


//create route for sving routes

module.exports = {
    createUser:function(req,res){
        console.log("i am being hit");
        db.User.create(req.body)
        .then(dbModel =>res.json(dbModel))
        .catch(err =>  console.log(err));
        //  res.status(422).json(err));
    },
    findUser:function(req,res){
        db.Saved.find(req.query)
        .sort({createdAt:-1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    
}