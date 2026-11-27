import express from "express"
import connectDb from "./src/config/db.js";
const app = express();
connectDb();
// server has been created 

app.listen(3000,()=>{
    console.log("server is running");
})