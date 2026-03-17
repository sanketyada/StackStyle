import orderModel from "../models/OrderModel.js";
import UserModel from "../models/UserModel.js";
import Stripe from "stripe";
import Razorpay from "razorpay";


//global veriable
const currency = "usd";
const deliveryCharges = 10;

//Gatway Initised
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const razorpayinstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRE,
});

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
const placeOrderStrip = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const { origin } = req.headers;

    const OrderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "Stripe",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(OrderData);
    await newOrder.save();

    const line_items = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: currency,
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: deliveryCharges * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode: "payment",
    });
    res.json({
      success: true,
      session_url: session.url,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//verify StripPayment
const verifyStripePayment = async (req, res) => {
  try {
    const { orderId, success, userId } = req.body;
    // console.log(orderId, success, userId)
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      await UserModel.findByIdAndUpdate(userId, { cartData: {} });
      res.json({
        success: true,
      });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Placing Order using RazorPay (not implemented yet)
const placeOrderRazorpay = async (req, res) => {
  const { userId, items, amount, address } = req.body;
  console.log(userId, items, amount, address);
  try {
    const { userId, items, amount, address } = req.body;

    const OrderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "Razorpay",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(OrderData);
    await newOrder.save();

    const options = {
      amount: amount * 100,
      currency: currency.toUpperCase(),
      receipt: newOrder._id.toString(),
    };

    await razorpayinstance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.json({ success: false, message: error });
      }
      res.json({
        success: true,
        order,
      });
    });
  }
  catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//verify RazorPay
const varifyRazorPay = async(req,res)=>{
  try {
    const {userId,razorpay_order_id} = req.body;
    const orderInfo = await razorpayinstance.orders.fetch(razorpay_order_id)
    console.log(orderInfo)
  } catch (error) {
    
  }
}




// All Orders Data for Admin panel
const allOrders = async (req, res) => {
  try {
    const ordres = await orderModel.find({});
    res.json({
      success: true,
      ordres,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
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
      message: "Status Updated",
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
  verifyStripePayment,
  varifyRazorPay
};
