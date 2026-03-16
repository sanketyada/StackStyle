import orderModel from "../models/OrderModel.js";
import UserModel from "../models/UserModel.js";

// palcing order using COD
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const OrderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(OrderData);
    await newOrder.save();

    //cleraing cart of user
    await UserModel.findByIdAndUpdate(userId, { cartData: {} });
    return res.json({
      success: true,
      message: "Order Placed",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//Placing Order Using Strinp

const placeOrderStrip = () => {};

//Palceing Order using RazorPay

const placeOrderRazorpay = () => {};

//All Orders Data for Admin pannel
const allOrders = async (req, res) => {
  try {
    const ordres = await orderModel.find({});
    res.json({
      success: true,
      ordres,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: true,
      message: error.message,
    });
  }
};

//User Order Data For Frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//update order status from frontrnd
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate({ _id: orderId }, { status: status });
    res.json({
      success: true,
      message: "Status Updvvated",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStrip,
  allOrders,
  userOrders,
  updateStatus,
};
