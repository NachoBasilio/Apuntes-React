/* En este ejemplo vamos a probar el useState,
este hook nos sirve para establecer y acceder al estado privado de un componente funcional */

import React, {useState} from 'react';

const Ejemplo1 = () => {
    //valor incial para un contador
    const valorInicial = 0

    //valor incial para una persona
    const personaInicial = {
        name: 'Nacho',
        email: 'nacho@gmail.com'
    }
    
    const [contador, setContador] = useState(valorInicial)
    const [persona, serPersona] = useState(personaInicial)

    function incrementarContador(){
        setContador(contador + 1)
    }
    function actualizarPersona(nuevaPersona) {
        serPersona(nuevaPersona)
    }

    return (
        <div>
            <h1>Super ejemplo de useState()</h1>
            <h2>contador: {contador}</h2>
            <button onClick={incrementarContador}>Aumentar</button>
            <h2>Persona:</h2>
            <h3>Nombre: {persona.name}</h3>
            <h3>Email: {persona.email}</h3>
            <button onClick={()=>{
                actualizarPersona({name:"Facu", email:"facu@gmail.com"})
            }}>Cambiar Persona</button>
        </div>
    );
}

export default Ejemplo1;
