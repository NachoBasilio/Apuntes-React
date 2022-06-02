import React from 'react'
import '../assets/css/saludo.css'

export default function Cuenta({valor, handleClick}) {
  return (
    <div>
        <h1 className="contadorTutulo">Contado{valor === 102 ? ("R"): ("r")}</h1>
        <div className="contenedorDeBotones">
        <button onClick={handleClick} name="suma">Contar cositas</button>
        <div>{valor}</div>
        {valor > 0 ? (<button onClick={handleClick} name="resta">Descontar Cositas</button>) : null}
        </div>
        {valor === 100 ? (<div className="contadorTutulo">Wow, contaste cien cositas</div>) : null}
    </div>
  )
}
