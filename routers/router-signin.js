import express from "express";
const router = express.Router();
import signin from "../handler/signin-handler.js"

router.post("",signin.verifydata)

export default router