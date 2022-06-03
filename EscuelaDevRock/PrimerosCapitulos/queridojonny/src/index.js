//Importamos todo lo necesario para arrancar react 
import React from 'react';
import {createRoot} from 'react-dom/client';//Apartir de react 18 esiamos createRoot
import App from './routes/App';


const divRoot = document.getElementById('root');
const root = createRoot(divRoot);

root.render(<App/>);