//Vamos a usar JSX que es una forma de escribir HTML dentro de Javascript, para usarlo tenemos que importar el modulo de react
import React from 'react';
//Ahora vamos a importar el ReactDOM para poder renderizar el componente en el DOM
import ReactDOM from 'react-dom';

const saludo = <h1>Hola Mundo</h1>;//Ahora podemos usar JSX

const divRoot = document.getElementById('root');//Ahora vamos a obtener el elemento del DOM que queremos renderizar


ReactDOM.render(saludo, divRoot);//Ahora vamos a renderizar el componente en el DOM
