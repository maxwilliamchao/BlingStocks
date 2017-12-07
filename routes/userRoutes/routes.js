const router = require("express").Router();
const userController = require("../../controllers/userController");
const path = require("path");
const passport = require("passport")
const db = require("../../models");

router.route("/signup")
      .post(userController.createUser);
router.post("/dashboard/:username", function(req, res){
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
      .then( dbModel =>  console.log(dbModel))
      .catch(err => console.log(err));
       });
      
router.get("/signin/:username/:password", function(req,res){
      const username = req.params  .username
      const passport = req.params.password;
       passport.authenticate('local-login', function(response) {
            console.log(response);
      })(req, res);
})
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;