import { Request, Response } from "express";
import User from "../models/userModel";
import Post from "../models/postModel";


export const userLoginFunc = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body
        const userLogin = await User.findOne({ username: username }).lean()

        if (userLogin?.password === password) {
            res.json({
                message: "user login done", success: true, userData: userLogin
            })
        }
        else {
            res.json({
                message: "username or password wrong", success: false
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
            message: "error occured: " + error, success: false
        })
    }
}


export const userSignupFunc = async (req: Request, res: Response) => {
    try {
        const { username, password, email } = req.body
        const checkUserExists = await User.findOne({ email }).lean()
        if (checkUserExists) {
            res.json({
                message: "User already exists", success: false
            })
            return
        }

        const userSignup = await User.create({ username, password, email, badgesEarned: ["Welcome Changemaker"] })
        console.log(userSignup)
        res.json({
            message: "User Signup Done", success: true, userData: userSignup
        })

    } catch (error) {
        res.json({
            message: "Error Occured: " + error, success: false
        })
    }
}


export const ngoSignupFunc = async (req: Request, res: Response) => {
    try {
        const { username, password, email, organizationName, registrationId } = req.body
        const checkUserExists = await User.findOne({ email }).lean()
        if (checkUserExists) {
            res.json({
                message: "User already exists", success: false
            })
            return
        }

        const ngoSignup = await User.create({ username, password, email, organizationName, registrationId, userType: 'ngo' })
        console.log(ngoSignup)
        res.json({
            message: "NGO Signup Done", success: true, userData: ngoSignup
        })

    } catch (error) {
        res.json({
            message: "Error Occured: " + error, success: false
        })
    }
}

export const fetchUserFunc = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params
        const userData = await User.findOne({ _id: userId }).lean()

        const fetchPosts = await Post.find({ userId: userId }).lean()
        if (fetchPosts) {
            res.json({
                success: true, message: "User Data and Posts fetched", userPosts: fetchPosts, userData: userData
            })
        }
        else {
            res.json({
                success: true, message: "User Data exists but does not have posts", userData: userData
            })
        }
        console.log()
    } catch (error) {
        res.json({
          success: false, message: "error occured: " + error
        })
        console.log(error)
    }
}
