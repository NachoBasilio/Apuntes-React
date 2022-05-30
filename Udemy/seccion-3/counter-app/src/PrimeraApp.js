import React from 'react';
import propTypes from 'prop-types';//con propTypes podemos definir las propiedades que va a recibir el componente

//vamos a crear un componente usando funciones

const PrimeraApp = ({saludo, subtitulo}) => {
    // const arregloDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const objetoRandom = {
    //     nombre: 'Juan',
    //     apellido: 'Perez',
    //     edad: '30',
    // }    

    return <>
        <h1> { saludo /* aca podemos poner constantes o variables, no todo pero si muchas cosas pueden ser llamadas de esta manera */ } </h1>
        <p>{subtitulo}</p>
        {/* <pre>{JSON.stringify(objetoRandom, null, 3)}</pre>*/}
    </>//fragment es una etiqueta que permite agrupar varios elementos en un solo componente, lo tenemos que importar de la libreria react, tambien podemos usar <> </>.
}

PrimeraApp.propTypes = {
    saludo: propTypes.string.isRequired
}//Asi obligamos a que el componente reciba una propiedad de tipo string como nosotros queremos

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo por defecto'
}

export default PrimeraApp;