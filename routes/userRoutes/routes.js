const router = require("express").Router();
const userController = require("../../controllers/userController");
const path = require("path");
const passport = require("passport")
const db = require("../../models");
const mongoose = require("mongoose")
var passwordHash = require('password-hash');
var session = require('client-sessions');
router.post("/signin",function(request,response){
      console.log("this route is being hit");
      var username = request.body.username;
      var password = request.body.password;
      db.User.findOne({'username':username})
             .then(dbModel => {
                   console.log(dbModel.password);
                   const userInfo = {
                         auth: true,
                         username: request.session.username,
                         email: request.session.email 
                   }
                   if(passwordHash.verify(password,dbModel.password)){
                        console.log("password is verified");
                        request.session.username = username;
                        request.session.email = dbModel.email;
                        response.json(userInfo);
                   }else{
                         response.json(false);
                   }
             })
             .catch(err => console.log(err))
});

router.post("/signup",function(req,res){
      
      var hashedPassword = passwordHash.generate(req.body.password);
      req.body.password = hashedPassword;
      console.log(req.body);
     
      db.User.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err))
});

router.post("/dashboard", function(request, response){
      console.log("the request username is ", request.session.username)
      db.User.findOneAndUpdate({
            'username':request.session.username
      },{
            '$addToSet':{
                  'stocks':request.body.ticker
            }
      },{
            'new':true,'upsert':true
      }
)
      .then( dbModel =>  response.json(dbModel))
      .catch(err => console.log(err));
       });
      

       router.get("/dashboard", function(request,response){
             
  db.User.findOne({'username':request.session.username})
  .then(dbModel => response.json(dbModel) )
});

router.get("/saved", function(request,response){
      db.User.findOne({'username':request.session.username})
      .then(dbModel => response.json(dbModel.stocks) )
});

router.put("/saved",function(request,response){
      console.log(request.body);
      db.User.findOneAndUpdate({'username':request.session.username},{ $pull: { 'stocks' :{ $in:[ request.body.attribute ]}}},
      { multi: true }).then(dbModel => response.json(true));
})
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;