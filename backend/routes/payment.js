// routes/payment.js
const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors"); // Ensure cors is required if used

const router = express.Router();

router.post("/orders", async (req, res) => {
    try {
      const { amount } = req.body;
      console.log(" Amount received from client (in paise):", amount);
  
      if (!amount) return res.status(400).json({ error: "Amount is required" });
  
      const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
      });
  
      const options = {
        amount: amount, //  should be in paise
        currency: "INR",
        receipt: "receipt_order_" + Math.random().toString(36).slice(2),
      };
  
      console.log(" Razorpay order options:", options);
  
      const order = await instance.orders.create(options);
      console.log(" Razorpay order created:", order);
  
      if (!order) return res.status(500).send("Some error occurred");
  
      res.json(order);
    } catch (error) {
      console.error(" Error creating Razorpay order:", error);
      res.status(500).send(error);
    }
  });
  

//  Export router correctly
module.exports = router;
