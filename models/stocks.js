const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const watchlistSchema = new Schema({
  title: { type: String, required: true, unique: true },
  date: Date,
  url: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now() }
});

const Watchlist = mongoose.model("Watchlist", watchlistSchema);

module.exports = Watchlist;
