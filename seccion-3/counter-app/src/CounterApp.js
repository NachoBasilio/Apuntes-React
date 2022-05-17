//rafc, rafce y rafcp son maneras de crear rapido un componente

//importamos react 
import React, {useState} from 'react';
import propTypes from 'prop-types';




const CounterApp = () => {

    //handleAdd
    const handleAdd = () => {
        setCounter(counter +1)
    }

    //useState
    const [counter, setCounter] = useState(0);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <div className='contenedorDeBotones'>
                <button onClick={handleAdd}>+1</button>
                <button onClick={handleAdd}>Reset</button>
                <button onClick={handleAdd}>-1</button>
            </div>
            
        </>
    )
}



export default CounterApp;