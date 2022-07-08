import React, {useEffect, useState, useRef} from 'react';

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)

    const miRef = useRef()

    function incrementar1(){
        setContador1(contador1 + 1)
    }
    function incrementar2(){
        setContador2(contador2 + 1)
    }

    useEffect(()=>{
        console.log('Cambio de estador del componente')
        console.log('Mostrando referencia a el elemento del DOM')
        console.log(miRef)
    })
    
    return (
        <div>
            <h1>Ejemplo de useState(), useRef() y useEffect()</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>

            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>

            <div>
                <button onClick={incrementar1}>Incrementar 1</button>
                <button onClick={incrementar2}>Incrementar 2</button>
            </div>
        </div>

        
    );
}

export default Ejemplo2;
