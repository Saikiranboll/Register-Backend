import express from "express";
const router = express.Router()
import registerHandler from "../handler/register-handler.js"

router.post("",registerHandler.postData);

router.get("",registerHandler.getData);

export default router