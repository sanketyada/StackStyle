import express from "express";
import {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStrip,
  allOrders,
  userOrders,
  updateStatus,
} from "../controllers/OrderController.js";
import AdminAuth from "../middleware/AdminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();


// Admin Features
orderRouter.post("/list",AdminAuth, allOrders);
orderRouter.post("/status",AdminAuth,updateStatus)

// Payment Features
orderRouter.post("/place",authUser,placeOrder) //COD
orderRouter.post("/strip",authUser,placeOrderStrip)
orderRouter.post("/razorpay",authUser,placeOrderRazorpay)


// User Features
orderRouter.post("/userorders",authUser,userOrders)

export default orderRouter;
