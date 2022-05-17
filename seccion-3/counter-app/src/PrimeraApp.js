import React from 'react';

//vamos a crear un componente usando funciones

const PrimeraApp = () => {
    const saludo = 'Hola Mundo';
    const arregloDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const objetoRandom = {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: '30',
    }

    return <>
        <h1> { saludo /* aca podemos poner constantes o variables, no todo pero si muchas cosas pueden ser llamadas de esta manera */ } </h1>
        <p>{arregloDeNumeros}</p>
        {/* <pre>{JSON.stringify(objetoRandom, null, 3)}</pre>*/}
    </>//fragment es una etiqueta que permite agrupar varios elementos en un solo componente, lo tenemos que importar de la libreria react, tambien podemos usar <> </>.
}

export default PrimeraApp;