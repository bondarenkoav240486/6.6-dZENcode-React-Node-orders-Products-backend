const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: Number,
  title: String,
  date: String,
  description: String,
  products: [
    {
      productId: Number,
      amount: Number,
    },
  ],
}, { suppressReservedKeysWarning: true });

module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema);