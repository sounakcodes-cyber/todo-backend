import express from 'express'
import { createTodo, getAllTodo } from '../controller/todoController.js'

const todoRoute = express.Router()

//api = func + url
todoRoute.post('/new', createTodo)
todoRoute.get('/getAll', getAllTodo)

export default todoRoute