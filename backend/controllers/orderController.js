const Order = require("../models/order");

const getMyOrders = async (req, res) => {
  try {
    const {email} = req.body;
    const myorders = await Order.find({email});
    res.status(200).json(myorders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const placeOrder = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { placeOrder, getMyOrders };
