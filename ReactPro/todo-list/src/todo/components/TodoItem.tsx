import { Todo } from "../interfaces/interfaces"

interface props {
    todo: Todo
}


export const TodoItem = ({todo}:props) => {

    const handleDbClick = ()=>{
        console.log('handleDbClick', todo.desc)
    }

  return (
    <li onDoubleClick={handleDbClick}>
        {todo.desc}
    </li>
  )
}
