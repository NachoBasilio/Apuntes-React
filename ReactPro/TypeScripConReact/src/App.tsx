import { Counter } from "./bases/Counter"
import { CounterBy } from "./bases/CounterBy"

export const App = () => {
  const initialValue = 0

  return (
    <div className="container m-auto">
      <h1 className="text-4xl">React</h1>
      <hr />

      <Counter initialValue={initialValue}/>
      <CounterBy/>
    </div>
  )
}
