import { Request, Response } from "express";
import User from "../models/userModel";


export const userLoginFunc = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body
        const userLogin = await User.findOne({ username: username })

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
        const checkUserExists = await User.findOne({ email })
        if (checkUserExists) {
            res.json({
                message: "User already exists", success: false
            })
            return
        }

        const userSignup = await User.create({ username, password, email })
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
