import React from 'react';
import '../assets/css/saludo.css'

const MiPrimerComponenteConJonny = () => {
    let nombre = "Jonny";
    return (
        <div className="saludo">
            <h1>Hola {nombre}</h1>
        </div>
    )
}

export default MiPrimerComponenteConJonny;