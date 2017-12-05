const router = require("express").Router();
const userController = require("../../controllers/userController");
const path = require("path");
const passport = require("passport")
router.route("/signup")
      .post(userController.createUser);
router.get("/signin", function(req,res){
       passport.authenticate('local-login', function(response) {
            
      })(req, res);
})
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;