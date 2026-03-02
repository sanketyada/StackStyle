import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/section/CommonComponet/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/section/CommonComponet/CartTotal";

function Cart() {
  const { cartItems, products, currency, updateQuantity,navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return cartData.length > 0 ? (
    <div className="border-t pt-14">
      <div className="text2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, idx) => {
          const productData = products.find(
            (element) => element._id == item._id,
          );
          // console.log(productData);

          return (
            <div
              key={idx}
              className="py-4 border-t border-b-0 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6 ">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value == 0
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value),
                      )
                }
                type="number"
                className="border max-w-10 sm:max-w-20 sm:px-2 py-1"
                min={1}
                defaultValue={item.quantity}
              />
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 mr-4 cursor-pointer sm:w-5"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end">
        <div className="w-full sm:w-112.5">
          <CartTotal />
          <div className="w-full text-end ">
            <button onClick={()=>navigate("/place-order")} className="bg-black text-white text-sm my-8 py-3 px-3">PROCEED TO PAY</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-gray-700 mx-auto w-full items-center text-center  my-auto">
      <p>No any Items Added Yet!</p>
    </div>
  );
}

export default Cart;
