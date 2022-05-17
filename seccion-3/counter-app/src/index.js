//Vamos a usar JSX que es una forma de escribir HTML dentro de Javascript, para usarlo tenemos que importar el modulo de react
import React from 'react';
//Ahora vamos a importar el ReactDOM para poder renderizar el componente en el DOM
import ReactDOM from 'react-dom';
//Ahora vamos a importar el componente que vamos a crear
import PrimeraApp from './PrimeraApp';
//Ahora vamos a importar el css
import './index.css';


const divRoot = document.getElementById('root');//Ahora vamos a obtener el elemento del DOM que queremos renderizar


ReactDOM.render(<PrimeraApp />, divRoot);//Ahora vamos a renderizar el componente en el DOM usando el metodo render, primero el componente y luego el elemento del DOM
