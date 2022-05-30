//react 18

//Vamos a usar JSX que es una forma de escribir HTML dentro de Javascript, para usarlo tenemos que importar el modulo de react
import React from 'react';
//Ahora vamos a importar el ReactDOM para poder renderizar el componente en el DOM
import {createRoot} from 'react-dom/client';
//Ahora vamos a importar el componente que vamos a crear
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
//Ahora vamos a importar el css
import './index.css';


const divRoot = document.getElementById('root');//Ahora vamos a obtener el elemento del DOM que queremos renderizar

const root = createRoot(divRoot);//Ahora vamos a crear una instancia de createRoot

root.render(<CounterApp />);//Ahora vamos a renderizar el componente en el DOM usando el metodo render, primero el componente y luego el elemento del DOM


//antes de react 18

// //Vamos a usar JSX que es una forma de escribir HTML dentro de Javascript, para usarlo tenemos que importar el modulo de react
// import React from 'react';
// //Ahora vamos a importar el ReactDOM para poder renderizar el componente en el DOM
// import ReactDOM from 'react-dom';
// //Ahora vamos a importar el componente que vamos a crear
// // import PrimeraApp from './PrimeraApp';
// import CounterApp from './CounterApp';
// //Ahora vamos a importar el css
// import './index.css';


// const divRoot = document.getElementById('root');//Ahora vamos a obtener el elemento del DOM que queremos renderizar


// ReactDOM.render(<CounterApp />, divRoot);//Ahora vamos a renderizar el componente en el DOM usando el metodo render, primero el componente y luego el elemento del DOM
