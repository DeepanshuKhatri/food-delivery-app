const { SchemaTypes } = require("mongoose");
const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  userId: {
    type: SchemaTypes.ObjectId,
    required: true,
  },
  //status: delivered/placed, items:[give references of products,...]
});

const Order = mongoose.model("Order", orderSchema);

exports.module = Order;
