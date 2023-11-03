import { Counter } from './componets/Counter';
import {TimerPadre} from './componets/TimerPadre';
import {Usuario} from './componets/Usuario';
import { ContadorRed } from './componets/ContadorRed';
import { Formulario } from './componets/Formulario';
import { Formulario2 } from './componets/Formulario2';


function App() {

  return (
    <div className='container m-auto text-white'>
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

      <h2 className='text-4xl mt-20'>Custom Hook</h2>
      <div className='container m-auto w-1/2'>
        <Formulario/>
        <Formulario2/>
      </div>
   
    </div>
  )
}

export default App
