import { useContext } from "react"
import { Todo } from "../interfaces/interfaces"
import { todoContext } from "../context/TodoContext"

interface props {
    todo: Todo
}


export const TodoItem = ({todo}:props) => {

    const {toggleTodo} = useContext(todoContext)

    const handleDbClick = ()=>{
        console.log('handleDbClick', todo.desc)
        toggleTodo(todo.id)
    }

  return (
    <li 
    className={todo.completed ? "cursor-pointer line-through" : "cursor-pointer"}
    onDoubleClick={handleDbClick}>
        {todo.desc}
    </li>
  )
}
