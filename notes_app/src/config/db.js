import config from "./config.js"
import mongoose from "mongoose"
const connectDb = async ()=>{
    try {
        mongoose.connect(config.MONGO_URI);
        console.log("db connected successfully");    
    } catch (error) {
        console.log("db connection failed",error);
    }
}

export default connectDb;