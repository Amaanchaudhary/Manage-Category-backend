import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()

app.get("/", (req, res) => {
    res.send("Hello from backend")
})

app.listen(8000, () => console.log("App is running on port 8000"))