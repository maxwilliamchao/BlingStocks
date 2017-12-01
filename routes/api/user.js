const router = require("express").Router();
const userController = require("../../controllers/userController");

// get back all users
router.get("/users", function(req, res){
  // call to DB to get all users
  // userController.findAll(req, res);
  console.log("Farley-Bob-Marley") ;
  res.send("Holiday Times");
})

// get back ONE user
// router.get("/users/:id", function(req, res){
//   // call to DB to get ONE users
//   // userController.findById(req, res)  ;
// })




  // .post(stockController.create);

//   router.post("/", function(req,res){
//     stockController.create(req.body)
//   })
//   .get(stockController.findById);

// // get and save stocks
// router.route("/dashboard")
//   .get(stockController.findAll);
//   .post(stockController.create);

// // view and remove saved stocks
// router.route("/saved")
//   .get(stockController.findAll);
//   .delete(stockController.remove);


// // router.route("/saved")
// //   .post(stockController.create);



module.exports = router;