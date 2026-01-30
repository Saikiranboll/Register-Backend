import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from 'cors';
import registerRouter from "./routers/router-register.js"
import signinRouter from "./routers/router-signin.js"
dotenv.config()
const app = express()
const PORT = process.env.PORT || 9090
const mongoURL = process.env.MONGO_URI
app.use(cors())
mongoose.connect(mongoURL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));
app.use(express.json())
app.use("/register",registerRouter)
app.use("/signin",signinRouter)

app.listen(PORT,()=>{
    console.log(`Server Running on port ${PORT}`)
});