const express = require("express");
const {
  addPaymentGateway,
  paymentResponse,
} = require("../controller/payment-controller.js");

const router = express.Router();

router.post("/payment", addPaymentGateway);
router.post("/callback", paymentResponse);

module.exports = router;
