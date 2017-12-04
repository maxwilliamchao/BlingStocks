const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]},
  password:{type:String, required:true},
  phone: {type: String, required: true, unique: true},
  createdAt: { type: Date, default: Date.now() },
  stocks: {type: Object, default: {} }
});
<<<<<<< HEAD
const User = mongoose.model("User", userSchema);
module.exports = User;
=======
const Watchlist = mongoose.model("Watchlist", userSchema);
module.exports = Watchlist;
>>>>>>> master
