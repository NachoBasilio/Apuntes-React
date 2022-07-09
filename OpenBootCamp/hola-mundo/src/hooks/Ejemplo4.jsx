import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1> Ejemplo de children props</h1>
            <p>
                Nombre: {props.children}
            </p>
            {props.children}
        </div>
    );
}

export default Ejemplo4;
