import { Counter } from './componets/Counter';
import {TimerPadre} from './componets/TimerPadre';
import {Usuario} from './componets/Usuario';
import { ContadorRed } from './componets/ContadorRed';


function App() {

  return (
    <div className='container m-auto'>
      <h1>React +TypeScript</h1>
      <hr />

      <h2 className='text-4xl mt-20'>Use State</h2>
      <Counter />
      <hr />
      <Usuario />

      <h2 className='text-4xl mt-20'>Use Effect - use Ref</h2>
      <TimerPadre />

      <h2 className='text-4xl mt-20'>Use Reducer</h2>
      <ContadorRed/>

    </div>
  )
}

export default App
