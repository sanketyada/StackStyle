import { createContext, useEffect, useState } from "react";
const ShopContext = createContext();
export { ShopContext };
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setshowSearch] = useState(true);
  const [cartItems, setCartItem] = useState({});
  const navigate = useNavigate()

  const addToCart = async (itemId, ItemSize) => {
    if (!ItemSize) {
      toast.error("Select Product Size!");
      return;
    }
    const cartData = structuredClone(cartItems);

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
    setCartItem(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }

    return totalCount;
  };



  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;

    setCartItem(cartData);

  };

  const getCartAmount = ()=>{
    let totalAmount = 0;
    for(const items in cartItems){
      let itemInfo= products.find((product)=>product._id === items)
      for(const item in cartItems[items]){
        try {
          if(cartItems[items][item] >0){
            totalAmount += itemInfo.price * cartItems[items][item]
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
    return totalAmount;
  }





  let value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setshowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
export default ShopContextProvider;
