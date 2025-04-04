import express from "express"
import { userLoginFunc, userSignupFunc } from "../controllers/authController"

const router = express.Router()

router.post("/user-login", userLoginFunc)

router.post("/user-signup", userSignupFunc)

export default router