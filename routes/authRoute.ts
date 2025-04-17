import express from "express"
import { fetchUserFunc, ngoSignupFunc, userLoginFunc, userSignupFunc } from "../controllers/authController"

const router = express.Router()

router.post("/user-login", userLoginFunc)

router.post("/user-signup", userSignupFunc)

router.post("/ngo-signup", ngoSignupFunc)

router.get("/fetch-user-data/:userId", fetchUserFunc)

export default router