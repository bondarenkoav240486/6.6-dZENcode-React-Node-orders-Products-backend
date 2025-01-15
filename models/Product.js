const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: Number,
  serialNumber: Number,
  isNew: Number,
  photo: String,
  title: String,
  type: String,
  specification: String,
  guarantee: {
    start: String,
    end: String,
  },
  price: [
    {
      value: Number,
      symbol: String,
      isDefault: Number,
    },
  ],
  order: Number,
  date: String,
}, { suppressReservedKeysWarning: true });

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);