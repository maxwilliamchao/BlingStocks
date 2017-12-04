const router = require("express").Router();
const userController = require("../../controllers/userController");
const path = require("path");

router.route("/signup")
      .post(userController.createUser);

// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });
router.route('/saved')
      .get(userController.findUser);


module.exports = router;