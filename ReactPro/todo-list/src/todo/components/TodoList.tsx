import { TodoItem } from "./TodoItem"
import { useTodos } from "../hooks/useTodos"

export const TodoList = () => {
  const {
    todos, pendingsTodos
   } = useTodos()
  
    
  return (
    <h1>
        <h2>Todos pendientes: {pendingsTodos}</h2>
        <ul>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo}/> )}
        </ul>
    </h1>
  )
}
