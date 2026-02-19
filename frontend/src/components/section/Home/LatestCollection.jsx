import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../../context/ShopContext";
import Title from "../CommonComponet/Title";
import ProductItem from "../CommonComponet/ProductItem";

function LatestCollection() {
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  const { products } = useContext(ShopContext);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl ">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          libero aperiam error consequatur tenetur laudantium necessitatibus
          praesentium consequuntur earum non.
        </p>
      </div>
      {/* {REmdering Products} */}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  lg:grid-col-5 gap-4 gap-y-6">
        {/* {console.log(latestProducts)} */}
        {latestProducts.map((item, index) => (
          <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
        ))}
      </div>
    </div>
  );
}

export default LatestCollection;
