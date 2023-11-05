import { TodoProvider } from './context/TodoProvider';
import { TodoList } from './components/TodoList';

export const Todo = () => {
  return (
    <TodoProvider>
        <h1 className="text-3xl">TODO: </h1>
        <TodoList/>
    </TodoProvider>
  )
}
