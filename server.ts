import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import authRoute from "./routes/authRoute"
import postRoute from "./routes/postRoute"
import causeRoute from "./routes/causeRoute"

dotenv.config()
const app = express()

mongoose.connect(process.env.MONGO_URI!, { dbName: process.env.DB_NAME })
    .then(() => {
        console.log("DB_Connected")
    })
    .catch((error: Error) => {
        console.log(error)
    })


app.use(cors())
app.use(express.json())


app.use("/auth", authRoute)
app.use("/post", postRoute)
app.use("/cause", causeRoute)






app.get("/", async (req, res) => {
    res.json({
        message: "You have reached the backend of Billion Smiles",
        additional: "Currently the V2 is being developed by Zeist"
    })
})

app.listen(process.env.PORT, () => {
    console.log("server connected")
})
