import React, { useContext, useEffect, useState } from "react";
import Title from "../CommonComponet/Title";
import ProductItem from "../CommonComponet/ProductItem";
import { ShopContext } from "../../../context/ShopContext";

function BestSeller() {
  const { products } = useContext(ShopContext);

  const [marketBestSeller, setMarketBestSeller] = useState([]);
  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setMarketBestSeller(bestProducts.slice(0, 5));
  }, []);

  return (
    <div>
      {/* {console.log(marketBestSeller)} */}
      <div className="text-center py-8 text-3xl ">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          libero aperiam error consequatur..
        </p>
      </div>
      {/* {REmdering Products} */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  lg:grid-col-5 gap-4 gap-y-6">
        {marketBestSeller.map((item, index) => {
          return (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BestSeller;
