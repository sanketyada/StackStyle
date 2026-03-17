import express from "express";
import {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStrip,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripePayment,
  varifyRazorPay
} from "../controllers/OrderController.js";
import AdminAuth from "../middleware/AdminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();


// Admin Features
orderRouter.post("/list",AdminAuth, allOrders);
orderRouter.post("/status",AdminAuth,updateStatus)

// Payment Features
orderRouter.post("/place",authUser,placeOrder) //COD
orderRouter.post("/stripe",authUser,placeOrderStrip)
orderRouter.post("/razorpay",authUser,placeOrderRazorpay)


// User Features
orderRouter.post("/userorders",authUser,userOrders)
//verifyPayment
orderRouter.post("/verifyStripe",authUser,verifyStripePayment)
orderRouter.post("/verifyRazorpay",authUser,varifyRazorPay)
export default orderRouter;
