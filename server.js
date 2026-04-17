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

//server - db - server - model(schema) - controller(functions) - route(api) - server
//CRUD
//create - post
//read - get
//update - put / patch
//delete - delete
//status-codes - 200,201,400-404,408,409,500
// mongoose methods: find, findById
