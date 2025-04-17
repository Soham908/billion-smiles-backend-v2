import express from "express"
import { createPostFunc, fetchAllPostsFunc, fetchUsersPostsFunc, likePostFunc, uploadCommentFunc } from "../controllers/postController"

const router = express.Router()

router.post("/create-user-post", createPostFunc)

router.get("/fetch-all-posts", fetchAllPostsFunc)

router.get("/fetch-user-posts/:userId", fetchUsersPostsFunc)

router.post("/user-like-post", likePostFunc)

router.post("/upload-post-comment", uploadCommentFunc)

export default router