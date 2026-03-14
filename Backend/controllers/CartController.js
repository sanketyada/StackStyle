import UserModel from "../models/UserModel.js";

// Add products to User Cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, ItemSize } = req.body;

    const userData = await UserModel.findById(userId);

    let cartData = userData.cartData;

    if (cartData[itemId]) {

      if (cartData[itemId][ItemSize]) {
        cartData[itemId][ItemSize] += 1;
      } else {
        cartData[itemId][ItemSize] = 1;
      }

    } else {

      cartData[itemId] = {};
      cartData[itemId][ItemSize] = 1;

    }

    await UserModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Added to Cart" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


//Update UserCart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    const userData = await UserModel.findById(userId);
    let cartData = userData.cartData;


    // console.log(cartData)

    cartData[itemId][size] = quantity;
    await UserModel.findByIdAndUpdate(userId , { cartData });
    res.json({ success: true, message: "Update to the Cart" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//get User cart Data
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    // console.log(req.body)
    const userData = await UserModel.findById(userId);
    let cartData = userData.cartData;
    res.json({
      success: true,
      cartData,
      message: "Here is Your CartData",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
export { addToCart, updateCart, getUserCart };
