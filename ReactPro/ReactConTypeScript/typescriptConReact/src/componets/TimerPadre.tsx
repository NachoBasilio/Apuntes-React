
import { useState } from 'react';
import { Timer } from './Timer';

export const TimerPadre = () => {
    const [milisegundos, setMilisegundos] = useState(1000)
  return (
    <>
        <span className="text-xl mt-6">Milisegundos {milisegundos}</span>
        <br />

        <button 
        className="bg-white hover:bg-gray-100 ml-2 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={()=>setMilisegundos(1000)}
        >1000
        </button>
        <button 
        className="bg-white hover:bg-gray-100 ml-2 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={()=>setMilisegundos(2000)}
        >2000
        </button>
        <button 
        className="bg-white hover:bg-gray-100 ml-2 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={()=>setMilisegundos(3000)}
        >3000
        </button>
        <Timer milisegundos={milisegundos} />
    </>
  )
}

