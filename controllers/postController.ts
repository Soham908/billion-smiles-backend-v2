import { Request, Response } from "express";
import Post, { IPost } from "../models/postModel";
import User from "../models/userModel";


export const createPostFunc = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log(req.body);
        const createPostRequest: IPost = await Post.create(req.body);

        // for giving first badge
        // const userPosts = await Post.find({ userId: req.body.userId });
        // if (userPosts.length === 1) {
        //     await User.updateOne(
        //         { _id: req.body.userId },
        //         { $push: { badgesEarned: "First Post Pioneer", userPostsRef: createPostRequest._id } }
        //     );
        // } else {
        //     await User.updateOne({ _id: req.body.userId }, { $push: { userPostsRef: createPostRequest._id } })
        // }

        await User.updateOne({ _id: req.body.userId }, { $push: { userPostsRef: createPostRequest._id } })

        console.log(createPostRequest)

        res.json({
            success: true,
            message: "Post creation done",
            postData: createPostRequest,
        });
    } catch (error: any) {
        console.error("Error creating post:", error);
        res.status(500).json({
            success: false,
            message: `Error creating post: ${error.message}`,
        });
    }
};


export const fetchAllPostsFunc = async (req: Request, res: Response): Promise<void> => {
    try {
        const fetchPostAllRequest: IPost[] = await Post.find()
            .populate("userId")
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            message: "All posts fetched",
            allPosts: fetchPostAllRequest,
        });

    } catch (error: any) {
        console.error("Error fetching all posts:", error);
        res.status(500).json({
            success: false,
            message: "Error fetching all posts",
        });
    }
};


export const fetchUsersPostsFunc = async (req: Request, res: Response) => {
    try {
        const fetchPosts = await Post.find({ userId: req.params.userId })
        if (fetchPosts) {
            res.json({
                success: true, message: "User Posts fetched", userPosts: fetchPosts
            })
        }
        else {
            res.json({
                success: true, message: "User does not have posts"
            })
        }
    } catch (error) {
        res.json({
          success: false, message: "Error occured: " + error
        })
    }
}
