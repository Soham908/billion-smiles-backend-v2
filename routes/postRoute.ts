import express from "express"
import { createPostFunc, fetchAllPostsFunc } from "../controllers/postController"

const router = express.Router()

router.post("/create-user-post", createPostFunc)

router.get("/fetch-all-user-post", fetchAllPostsFunc)

export default router