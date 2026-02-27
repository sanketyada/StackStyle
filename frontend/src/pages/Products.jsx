import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/section/CommonComponet/RelatedProducts";

function Products() {
  const { productID } = useParams();
  const { products, currency } = useContext(ShopContext);
  // const item = products.filter((item) => item._id == productID);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productID) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [products, productID]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*---------------- Product Data -----------------*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*------------------ Product Images------------- */}

        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => {
                  setImage(item);
                }}
                src={item}
                key={index}
                alt=""
                className="w-[24%] m-1 sm:w-full sm:mb-2 shrink-0"
              />
            ))}
          </div>
          <div className="w-full sm:w-[85%]">
            <img src={image} alt="" className="w-full h-auto " />
          </div>
        </div>

        {/* {-----Product Info-------} */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className=" flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className="pl-2">(169)</p>
          </div>
          <p className="mt-5 text-3xl font-medium ">
            {currency}
            {productData.price}
          </p>
          <p className="text-gray-500 mt-5 md:w-4/5 ">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((eachSize, idx) => (
                <button
                  onClick={() => setSize(eachSize)}
                  className={`py-2 px-4 bg-gray-100 ${eachSize == size ? "border" : ""} `}
                  key={idx}
                >
                  {eachSize}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white text-sm py-3 px-8 ">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1 ">
            <p>100% Original Product</p>
            <p>Cash on Delivery is Available on this product.</p>
            <p>Easy retun and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/*-------------------Description and Review Section -------------------  */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information
          </p>
        </div>
      </div>
      {/* ___________Display Related Products__________ */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Products;
