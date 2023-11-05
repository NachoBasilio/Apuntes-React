import { TodoItem } from "./TodoItem"
import { useTodos } from "../hooks/useTodos"

export const TodoList = () => {
  const {
    todos
   } = useTodos()
  
    
  return (
    <h1>
        <ul>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo}/> )}
        </ul>
    </h1>
  )
}
