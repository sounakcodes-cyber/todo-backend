import express from "express"
import { dbConnect } from "./src/config/dbConnect.js"
import todoRoute from "./src/route/todoRoute.js"

const app = express()

const port = 9005

app.use(express.json())
app.use('/', todoRoute)

dbConnect()

app.listen(port, () => {
    console.log(`Server is Running at port ${port}`);
})
