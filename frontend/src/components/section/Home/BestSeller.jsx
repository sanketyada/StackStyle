import React, { useEffect, useState } from "react";
import Title from "../CommonComponet/Title";
import ProductItem from "../CommonComponet/ProductItem";
import { products } from "../../../assets/assets";

function BestSeller() {
  const [marketbestSeller, setMarketBestSeller] = useState([]);

  useEffect(() => {
    setMarketBestSeller(products);
  }, []);
  return (
  <div>
{console.log(marketbestSeller)}
  </div>);
}

export default BestSeller;
