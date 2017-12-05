const db = require("../models");
const crypt = require("../crypt/crypt");


//create route for sving routes

module.exports = {
    createUser:function(req,res){
        var password = req.body.password;
        crypt.encrypt(password,function(hashedPassword,salt){
            console.log("i am being hit");
            req.body.password = hashedPassword;
            req.body.salt=salt;
            db.User.create(req.body)
            .then(dbModel =>res.json(dbModel))
            .catch(err =>  console.log(err));
        })
        
        //  res.status(422).json(err));
    },
    findUser:function(req,res){
        db.Saved.find(req.query)
        .sort({createdAt:-1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    
}

// module.exports = {
//   findAll: function(req, res) {
//     db.User
//       .find()
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   findById: function(req, res) {
//     db.User
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.User
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.User
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.User
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };
