import React, { useContext } from "react";
import { assets } from "../../../assets/assets";
// import { assets } from "../../assets/assets";


import { ShopContext } from "../../../context/ShopContext";
function Hero() {
    // let name = useContext(ShopContext)
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 ">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-10 ">
        <div className="text-[#414141">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLER</p>
          </div>
          <h1 className=" prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className=" w-8 md:w-11 h-px bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero Left Side */}
      <img className="w-full sm:w-1/2" src={assets.hero_img} alt="" />
    </div>
  );
}

export default Hero;
