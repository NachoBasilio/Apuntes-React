import { Todo } from "../interfaces/interfaces"
import { useTodos } from "../hooks/useTodos"

interface props {
    todo: Todo
}


export const TodoItem = ({todo}:props) => {

    const {toggleTodo } = useTodos()

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
