import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authroutes.js";
import messageRoutes from "./routes/messageroutes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import userRoutes from "./routes/userroutes.js";

const app = express();
const PORT =process.env.PORT || 5000

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

connectToMongoDB().then(()=>{  
app.listen(PORT,()=>{ 
    
    console.log(`server running on port ${PORT}`);
})
})   