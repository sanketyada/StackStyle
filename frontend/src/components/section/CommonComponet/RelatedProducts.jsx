import React, { useContext, useEffect, useMemo, useState } from "react";
import { ShopContext } from "../../../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function RelatedProducts({ category, subCategory,id }) {
  const { products } = useContext(ShopContext);
  // const [relatedProduct, setRelatedProduct] = useState([]);

  // //useEffect are used when we have to do some side Effect like (Fetching,Subscribing,Using timers,Touching DOM)
  // useEffect(()=>{
  // if(products.length > 0){
  //   let productCopy = products.slice()
  //   productCopy = productCopy.filter((item)=>item.category == category)
  //   productCopy= productCopy.filter((item)=>item.subCategory == subCategory)
  //   setRelatedProduct(productCopy)
  // }
  // },[products, category, subCategory])

  ////UseMemo be Appropriate Here use when (filtering, sorting,arrays,expensive calculations,prevent unnecessary recalculations on re-render)
  const realatedData = useMemo(() => {
    return products.filter(
      (item) => item.category == category && item.subCategory == subCategory,
    );
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2 ">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {realatedData.slice(0, 6).filter((item)=> item._id != id ).map((item, idx) =>(
          <ProductItem
            key={idx}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
          // console.log(item._id ==id)
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
