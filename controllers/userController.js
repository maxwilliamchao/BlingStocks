const db = require("../models");
const crypt = require("../crypt/crypt");


//create route for sving routes

module.exports = {
    createUser:function(req,res){
        var cryptPass = crypt.encrypt(req.body.password);
        const obj = {
            username:req.body.username,
            email:req.body.email,
            phone:req.body.phone,
            password:cryptPass
        }; 
        db.User.create(obj)
        .then(dbModel =>res.json(dbmodel))
        .catch(err => res.status(422).json(err));
    },
    findUser:function(req,res){
        db.User.find(req.query)
        .sort({createdAt:-1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    removeStocks: function(req, res) {
        db.Article
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }    
}