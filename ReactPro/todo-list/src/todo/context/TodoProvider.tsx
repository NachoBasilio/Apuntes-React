import { useReducer } from 'react';
import { TodoState } from '../interfaces/interfaces';
import { todoContext } from './TodoContext';
import { todoReducer } from './todoReducer';



const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: "1",
            desc: "Aprender react culiaaado",
            completed: false
        },        
        {
            id: "2",
            desc: "Aprender typescript culiaaado",
            completed: false
        }
    ],
    completed: 0,
    pending: 2
} 



interface props {
    children: JSX.Element | JSX.Element[]
}


export const TodoProvider = ({children}:props) => {
    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

    const toggleTodo = (id:string)=>{
        dispatch({type:"toggleTodo", payload: {id}})
    }

    return (
        <todoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            { children }
        </todoContext.Provider>
    )
}
