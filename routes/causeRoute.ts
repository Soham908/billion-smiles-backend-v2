import express from "express"
import { createCauseFunc, fetchCausesFunc, fetchUserCausesFunc } from "../controllers/causeController"

const router = express.Router()

router.post("/create-cause", createCauseFunc)

router.get("/fetch-user-causes/:userId", fetchUserCausesFunc)

router.get("/fetch-causes", fetchCausesFunc)

export default router