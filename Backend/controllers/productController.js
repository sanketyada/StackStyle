import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
//function for add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subcategory,
      sizes,
      bestseller,
    } = req.body;
    console.log(req.body);

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item != undefined,
    );
    let imagesURL = await Promise.all(
      images.map(async (image) => {
        let result = await cloudinary.uploader.upload(image.path, {
          resource_type: "image",
        });
        return result.secure_url;
      }),
    );

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory: subcategory,
      bestseller: Boolean(bestseller),
      sizes: JSON.parse(sizes),
      image: imagesURL,
      date: Date.now(),
    };

    const newProduct = new productModel(productData);
    await newProduct.save();

    return res.json({
      success: true,
      message: "Product Added.",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//function for list product
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    if (products.length < 0) {
      return res.json({
        success: false,
        products,
      });
    }
    return res.json({
      success: true,
      message: "Data Fetched",
      products,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//remove products
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({
      succes: true,
      message: "Product Removed",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//Single product Info
const singleProduct = async (req, res) => {
  try {
    const id = req.body.id;
    const product = await productModel.findById({ _id: id });
    if (!product) {
      return res.json({
        success: false,
        message: "Product Unable to find.",
      });
    }
    return res.json({
      success: true,
      message: "Product Founded",
      product,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
