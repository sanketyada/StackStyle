import { jwt } from "jsonwebtoken";
const authUser = async(req,res,next)=>{
    const token = req.headers;
    if(!token){
        return res.json({
            success:false,
            message:"Noth authorised Login Agin"
        })
    }
    try {
        const decode_Token = jwt.verify(token,process.env.JWT_SECRET)
    } catch (error) {
        
    }
}