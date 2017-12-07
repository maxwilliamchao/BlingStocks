const router = require("express").Router();
const userController = require("../../controllers/userController");
const path = require("path");
const passport = require("passport")
const db = require("../../models");
const mongoose = require("mongoose")
router.post("/signin",function(req,res){
      
});

router.post("/signup",function(req,res){

});
router.post("/dashboard", function(req, res){
      db.User.findOneAndUpdate({
            'username':req.body.username
      },{
            '$push':{
                  'stocks':req.body.ticker
            }
      },{
            'new':true,'upsert':true
      }
)
      .then( dbModel =>  res.json(dbModel))
      .catch(err => console.log(err));
       });
      
router.get("/dashboard", function(req,res){
  db.User.findOne({'username':'brandon'})
  .then(dbModel => res.json(dbModel) )
});
router.get("/saved", function(req,res){
      db.User.findOne({'username':'brandon'})
      .then(dbModel => res.json(dbModel.stocks) )
});
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;