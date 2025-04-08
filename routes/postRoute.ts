import express from "express"
import { createPostFunc, fetchAllPostsFunc, fetchUsersPostsFunc } from "../controllers/postController"

const router = express.Router()

router.post("/create-user-post", createPostFunc)

router.get("/fetch-all-posts", fetchAllPostsFunc)

router.get("/fetch-user-posts", fetchUsersPostsFunc)

export default router