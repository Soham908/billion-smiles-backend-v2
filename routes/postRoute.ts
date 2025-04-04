import express from "express"
import { createPostFunc } from "../controllers/postController"

const router = express.Router()

router.post("/create-user-post", createPostFunc)


export default router