import { Counter } from "./bases/Counter"

export const App = () => {
  const initialValue = 0

  return (
    <div className="container m-auto">
      <h1 className="text-4xl">React</h1>
      <hr />

      <Counter initialValue={initialValue}/>
    </div>
  )
}
