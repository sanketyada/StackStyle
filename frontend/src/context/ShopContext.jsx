import { createContext, useEffect, useState } from "react";
const ShopContext = createContext();
export { ShopContext };
import { products } from "../assets/assets";
import { toast } from "react-toastify";

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setshowSearch] = useState(true);
  const [cartItems, setCartItem] = useState({});

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

  
  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

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
    getCartCount
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
export default ShopContextProvider;
