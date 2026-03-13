import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
const authUser = async (req, res, next) => {
  const {token} = req.headers;
  if (!token) {
    return res.json({
      success: false,
      message: "Noth authorised Login Again",
    });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decode.userId;    //here it saved the userid in req.body
    // console.log(decode)
    next();
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};
export default authUser;