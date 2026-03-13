import UserModel from "../models/UserModel.js";
import status from "http-status";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign( id , process.env.JWT_SECRET);
};
//Route for User Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await UserModel.findOne({ email });

    if (!findUser) {
      return res.status(status.NOT_FOUND).json({
        success: false,
        message: "User Doesn't Exist!",
      });
    }

    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch) {
      return res.status(status.NOT_FOUND).json({
        success: false,
        message: "User Doesn't Exist!",
      });
    }

    const token = createToken({
      userId:findUser._id,
    },process.env.JWT_SECRET)

    return res.json({
      success: true,
      token,
      message: "Login Successfull",
    });
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
};
//Route for Register User
const regiterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await UserModel.findOne({ email });

    //Does userExist
    if (userExist) {
      return res.status(status.CONFLICT).json({
        success: false,
        message: "User Exist!",
      });
    }

    //validating Email
    //validator.isEmail is funtion to validate Email
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please Enter Valid Email !",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please Enter a Strong Password !",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    //Token creation
    const token = createToken(newUser._id);

    return res.status(status.CREATED).json({
      success: true,
      token,
      message: "User Craeted Successfully!",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
//Route for Admin Login
const adminLogin = async (req, res) => {
  try {
    const {email,password} = req.body
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign(email+password,process.env.JWT_SECRET)
      res.json({
        success:true,
        message:"Admin Logged Done!",
        token
      })
    }
  } catch (error) {
    res.json({
      success:false,message:"Invalid Credetials!"
    })
  }
};

export { loginUser, regiterUser, adminLogin };
