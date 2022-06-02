import React from 'react';


const MiPrimerComponenteConBootstrap = () => {
    let nombre = "Nacho";
    const handleClick = (e) => {
        alert(`Hola ${nombre}`);
        alert(`Hola ${e.target.name}`);//con el e.target.name podemos acceder al nombre del elemento que se ha pulsado, algo que definimos nosotros anteriormente.
    }
    return (
        <div className="saludo">    
            <button type='button' className="btn btn-primary" name="Boton Loco" onClick={handleClick}>
                Holanda
            </button>
        </div>
    )
}

export default MiPrimerComponenteConBootstrap;