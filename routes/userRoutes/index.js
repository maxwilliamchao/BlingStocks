const router = require("express").Router();
const userRoutes = require("./routes");
// const router = require("express").Router();
// const savedController = require("../../controllers/savedcontroller");


router.use("/user",userRoutes);
// Book routes

module.exports = router;