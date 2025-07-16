import { Todo } from "../models/todo.model.js";


export const createTodo = async (req, res)=>{
    try {
        const { title, description} = req.body
        const newTodo = new Todo({
            title, 
            description,
            owner: req.user.id
        })
        await newTodo.save()

         res.status(201).json({
            success: true,
            message: "Todo created successfully",
            todo: newTodo
        });
        
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to create todo", error });
    }

}


export const getTodo = async (req, res)=>{
   
  try {
        const todos = await Todo.find({ owner: req.user.id });
        res.status(200).json({
            success: true,
            todos
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch todos", error });
    }
}