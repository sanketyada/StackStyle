import React, { useContext, useState } from "react";
import Title from "../components/section/CommonComponet/Title";
import CartTotal from "../components/section/CommonComponet/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

function PlaceOrder() {
  const [method,setMethod] = useState("cod")
  const {navigate} = useContext(ShopContext)
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3 ">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last Name"
          />
        </div>

        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
        />

        <div className="flex gap-3 ">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3 ">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="ZipCode"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>
      {/* -------------------Right Side------------------ */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/*_______________ Payment method Selection___________ */}
          <div className="flex gap-3 flex-col lg:flex-row ">
            <div onClick={()=>setMethod("strip")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer ">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method ==="strip" ? "bg-green-400":null} `}></p>
              <img src={assets.stripe_logo} className="h-5 mx-4" alt="" />
            </div>
            <div onClick={()=>setMethod("razor")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer ">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method ==="razor" ? "bg-green-400":null} `}></p>
              <img src={assets.razorpay_logo} className="h-5 mx-4" alt="" />
            </div>
            <div onClick={()=>setMethod("cod")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer ">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method ==="cod" ? "bg-green-400":null} `}></p>
              {/* <img src={assets.} className="h-5 mx-4" alt="" /> */}
              <p className="text-gray-500 text-sm font-medium mx-4 ">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full text-end mt-10" >
        <button onClick={()=>navigate("/orders")} className="bg-black text-white text-sm  py-3 px-16">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
