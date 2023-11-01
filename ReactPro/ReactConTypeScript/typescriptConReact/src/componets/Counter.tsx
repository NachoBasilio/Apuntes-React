import { useState } from "react";


export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementar = (numero:number):void=>{
    setCounter(counter + numero);
  }

  return (
    <div className="mt-5 container m-auto">
        <h3 className="text-2xl">Counter: useState</h3>
        <span className=" mt-2 text-xl">Valor: {counter}</span>
        <br />
        <button onClick={()=>{
          incrementar(1);
        }} className="bg-blue-500  m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Mas</button>
        <button onClick={()=>{
          setCounter(0);
        }} className="bg-red-500  m-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reset</button>       
        <button onClick={()=>{
          incrementar(-1);
        }} className="bg-blue-500  m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Menos</button>
    </div>
  )
}
