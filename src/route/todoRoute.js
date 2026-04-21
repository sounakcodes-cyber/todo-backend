import express from 'express'
import { createTodo, deleteTodo, getAllTodo, updateTodo } from '../controller/todoController.js'

const todoRoute = express.Router()

//api = func + url
todoRoute.post('/new', createTodo)
todoRoute.get('/getAll', getAllTodo)
todoRoute.delete('/delete/:id', deleteTodo)
todoRoute.put('/update/:id', updateTodo)

export default todoRoute