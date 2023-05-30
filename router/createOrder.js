const express=require('express');
const dotenv=require('dotenv');
const Razorpay=require('razorpay');


dotenv.config();


const router = express.Router();

router.post("/", (req, res) => {
  const instance = new Razorpay({
    key_id: process.env.RAZOR_KEY,
    key_secret: process.env.RAZOR_SECRET,
  });

  const options = {
    amount: req.body.amount, // amount received from the user
    currency: "INR",
    receipt: req.body.receipt,
  };

  instance.orders
    .create(options)
    .then((order) => {
      res.status(200).json({
        status: "success",
        orderDetails: order,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "failed",
        message: "something went wrong",
        err: err,
      });
    });
});

module.exports=router;
