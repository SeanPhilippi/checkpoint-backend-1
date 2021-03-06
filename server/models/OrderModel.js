const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
   id: {
      required: true,
      type: Number
   },
   orderDate: {
      required: true,
      type: String
   },
   orderTime: {
      required: true,
      type: String
   },
   amount: {
      required: true,
      type: String
   }
});

module.exports = mongoose.model("orders", orderSchema);