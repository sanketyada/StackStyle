import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/dbConnection.js"
import connectCloudinary from "./config/Cloudinary.js"
import userRouter from "./routes/userRoute.js"

//App config
const app = express()
const PORT = process.env.PORT ||2000
connectDB()
connectCloudinary()

//middleWere
app.use(express.json())
app.use(cors())



//Api Endpoints
app.use('/api/user',userRouter)



app.get("/",(req,res)=>{
    res.send("Hellos Worldx")
})

app.listen(PORT,()=>{
    console.log(`http://localhost:3000/`)
})