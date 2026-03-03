import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const conn  = await mongoose.connect(`${process.env.MONGODB_URI}/StyleStack`)
        console.log(`Database Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Database Connection Error :${error.message}`)
        process.exit(1) //exist if db fails
    }
};
export default connectDB;