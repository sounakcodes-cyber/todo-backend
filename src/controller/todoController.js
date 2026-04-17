import todoSchema from "../model/todoSchema.js"

export const createTodo = async(req, res)=>{
    try {
        const {title} = req.body
        const newTodo = await todoSchema.create({title})
        return res.status(201).json({
            success:true,
            message:"Todo created successfully",
            data:newTodo
        })
        
    } catch (error) {
         return res.status(500).json({
            success:false,
            message:"Todo not created"
        })
        
    }
}

export const getAllTodo = async(req, res)=>{
    try {
        const allTodo = await todoSchema.find({})
        return res.status(200).json({
            success:true,
            message:"Todo fetched successfully",
            data:allTodo
        })
        
    } catch (error) {
         return res.status(500).json({
            success:false,
            message:"Todo not fetched"
        })
        
    }
}