import express from "express"
import { fetchUserFunc, userLoginFunc, userSignupFunc } from "../controllers/authController"

const router = express.Router()

router.post("/user-login", userLoginFunc)

router.post("/user-signup", userSignupFunc)

router.get("/fetch-user-data/:userId", fetchUserFunc)

export default router