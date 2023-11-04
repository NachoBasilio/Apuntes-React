import { TodoProvider } from './context/TodoProvider';

export const Todo = () => {
  return (
    <TodoProvider>
        <h1 className="text-3xl">TODO: </h1>
        <ul>
            <li>TODO 1</li>
            <li>TODO 2</li>
            <li>TODO 3</li>
        </ul>
    </TodoProvider>
  )
}
