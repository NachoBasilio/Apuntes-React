import { useContext } from "react"
import { todoContext } from "../context/TodoContext"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {
    const {todoState} = useContext(todoContext)
    const {todos} = todoState

    
  return (
    <h1>
        <ul>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo}/> )}
        </ul>
    </h1>
  )
}
