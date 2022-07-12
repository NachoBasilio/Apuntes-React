import React, { useEffect, useState } from 'react';

const DidUpdateHook = () => {
    useEffect(()=>{
        console.log("Sea cutaliza to el rato")
    })
    const [contador, setContador] = useState(0);
    const aumentarCuenta = ()=>{
        setContador(contador+1)
    }
    return (
        <div>
            {contador}
            <button onClick={aumentarCuenta}>Aumentar</button>
        </div>
    );
}

export default DidUpdateHook;
