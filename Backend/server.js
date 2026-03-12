import express from "express"
import cors from "cors"
import 'dotenv/config'
import status from "http-status";
import connectDB from "./config/dbConnection.js"
import connectCloudinary from "./config/Cloudinary.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/CartRoute.js";

//App config
const app = express()
const PORT = process.env.PORT ||2000
connectDB()
connectCloudinary()

//middleWere
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())



//Api Endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use("/api/cart",cartRouter)



app.get("/",(req,res)=>{
    res.send("Hellos Worldx")
})

app.listen(PORT,()=>{
    console.log(`http://localhost:3000/`)
})