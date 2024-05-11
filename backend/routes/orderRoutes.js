const express = require("express");
const { getMyOrders, placeOrder } = require("../controllers/orderController");

const router = express.Router();

router.post("/myorders", getMyOrders);
router.post("/order", placeOrder);

module.exports = router;
