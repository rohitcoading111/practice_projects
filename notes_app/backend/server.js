import connectDb from "./src/config/db.js";
import app from "./src/app/app.js";
connectDb();
// server has been created 

app.listen(3000,()=>{
    console.log("server is running");
})