import { useContext } from "react"
import { todoContext } from "../context/TodoContext"




export const useTodos = ()=>{
    const {
        todoState,
        toggleTodo
    } = useContext(todoContext)


    return{
        todos: todoState.todos,
        pendingsTodos: todoState.todos.filter(todo=>!todo.completed).length,
        
        toggleTodo
    }
}