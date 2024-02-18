import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import router from './Routes/index.js';
import mongoose from 'mongoose';

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

dotenv.config()

app.get("/", (req, res) => {
    res.send("Welcome to Manage Category backend server");
})

app.use("/api/v1" , router)

mongoose.connect(process.env.MONGOURL).then(() =>console.log("Database connected"))
app.listen(8000, () => console.log("App is running on port 8000"))