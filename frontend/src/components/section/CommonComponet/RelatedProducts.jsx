import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../../context/ShopContext";

function RelatedProducts({ category, subCategory }) {
  const { products } = useContext(ShopContext);
  // console.log(category, subCategory);
  // console.log(products)
  const [filterProduct, setFilterProduct] = useState([]);

  useState(() => {
    setFilterProduct(products);
  }, []);

  const applyFilter = ()=>{
    let copyProduct = filterProduct
    copyProduct = copyProduct.filter((item)=>item.category == category )
    setFilterProduct(copyProduct)
  }

useEffect(()=>{
  applyFilter()
},[category, subCategory])

  return (
    <div>
      {filterProduct.map((item) => (
        <img src={item.image[0]} alt="" />
      ))}
    </div>
  );
}

export default RelatedProducts;
