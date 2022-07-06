import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    const [age, setage] = useState(29);

    const brithday = () =>{
        setage(age + 1)
    }

    return (
        <div>
            <h1>
                ¡Hola! {props.name}, los componentes funcionales son la polla.
            </h1>
            <h2>
                Tu edad es de {age}
            </h2> 
            <div>
                <button onClick={brithday}>Agregar mas edad</button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
