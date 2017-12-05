const router = require("express").Router();
const userRoutes = require("./routes.js");
// const router = require("express").Router();
// const savedController = require("../../controllers/savedcontroller");


router.use("/user",userRoutes);
//user routes

module.exports = router;