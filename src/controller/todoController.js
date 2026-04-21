import todoSchema from "../model/todoSchema.js"

export const createTodo = async (req, res) => {
    try {
        const { title } = req.body
        const newTodo = await todoSchema.create({ title })
        return res.status(201).json({
            success: true,
            message: "Todo created successfully",
            data: newTodo
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

export const getAllTodo = async (req, res) => {
    try {
        const allTodo = await todoSchema.find({})
        return res.status(200).json({
            success: true,
            message: "Todo fetched successfully",
            data: allTodo
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Todo not fetched"
        })

    }
}

export const deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id;
        console.log("todoId", todoId);
        const delTodo = await todoSchema.findByIdAndDelete({ _id: todoId })
        if (!delTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Todo deleted successfully",
            data: delTodo
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Todo not deleted"
        })

    }
}


export const updateTodo = async (req, res) => {
    try {
        const todoId = req.params.id;
        const { title } = req.body
        const isTodo = await todoSchema.findOne({ _id: todoId })
        if (!isTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            })
        }
        else {
            isTodo.title = title
            await isTodo.save()
            return res.status(200).json({
                success: true,
                message: "Todo updated successfully",
                data: isTodo
            })
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.data.message
        })
    }
}