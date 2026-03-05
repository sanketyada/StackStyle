//function for add product

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      date,
      bestseller,
    } = req.body;

    const image1 = req.file.image1[0];
    const image2 = req.file.image2[0];
    const image3 = req.file.image3[0];
    const image4 = req.file.image4[0];

    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      date,
      bestseller,
    );
    console.log(image1,image2,image3,image4)
    res.json()
  } catch (error) {
    return res.json({
        success:false,
        message:error.message
    })
  }
};

//function for list product
const listProduct = async () => {
  console.log("Sanket");
};

//remove products
const removeProduct = async (req,res) => {
    res.json({
        message:"We are Free"
    })
};

//Single product Info
const singleProduct = async () => {};

export { addProduct, listProduct, removeProduct, singleProduct };
