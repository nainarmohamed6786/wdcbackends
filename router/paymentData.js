const express=require('express');
const dotenv=require('dotenv');
const PaymentModel=require('../models/UserSchema');

dotenv.config();

const router = express.Router();

router.post("/", async(req, res) => {

  const newPaymentData = new PaymentModel({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    amount: req.body.amount / 100,
    razorpay_order_id: req.body.razorpay_order_id,
    razorpay_payment_id: req.body.razorpay_payment_id,
    razorpay_signature: req.body.razorpay_signature,
  });

    const newPaymentDatas=await newPaymentData.save();

    newPaymentDatas
    .save()
    .then((item) => {
      res.json({
        status: `success`,
        message: `Your data successfully added in the database`,
        data: item,
      });
    })
    .catch((err) => {
      res.json({
        status: `failed`,
        message: `Sorry can't add data in the database`,
        errMess: err,
      });
    });

});

module.exports=router;
