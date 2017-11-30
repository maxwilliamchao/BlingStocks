const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]},
  phone: {type: String, required: true, unique: true},
  createdAt: { type: Date, default: Date.now() },
  stocks: {type: Object, required: true, unique: true, default: {} }
});

const Watchlist = mongoose.model("Watchlist", userSchema);

module.exports = Watchlist;
