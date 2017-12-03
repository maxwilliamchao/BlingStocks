const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StockSchema = new Schema({
  stockTicker: {
    type: String,
    required: true,
    unique: true
  }
});

var Stock = mongoose.model('Stock', StockSchema);

module.exports = Stock;