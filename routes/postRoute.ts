import express from "express"
import { createPostFunc, fetchAllPostsFunc, fetchUsersPostsFunc, likePostFunc } from "../controllers/postController"

const router = express.Router()

router.post("/create-user-post", createPostFunc)

router.get("/fetch-all-posts", fetchAllPostsFunc)

router.get("/fetch-user-posts", fetchUsersPostsFunc)

router.post("/user-like-post", likePostFunc)

export default router