//rafc, rafce y rafcp son maneras de crear rapido un componente

//importamos react 
import React, {useState} from 'react';
import propTypes from 'prop-types';



const CounterApp = ({value = 0}) => {

    //handleAdd
    const handleAdd = () => {
        setCounter( counter + 1 )
    }
    const handleRemove = () => {
        setCounter( counter - 1 )
    }
    const handleReset = () => {
        setCounter( value )
    }

    //useState
    const [counter, setCounter] = useState(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <div className='contenedorDeBotones'>
                <button onClick={handleRemove}>-1</button>  
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleAdd}>+1</button>
            </div>
        </>
    )
}

propTypes.CounterApp = {
    value: propTypes.number
}

export default CounterApp;