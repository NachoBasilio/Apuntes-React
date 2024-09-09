import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
  // El StrictMode es un componente que envuelve a otros componentes y verifica si se están utilizando prácticas seguras en ellos. Renderiza dos veces el componente que envuelve, por lo que no se debe usar en producción, pero gracias a esto se pueden detectar problemas en el código.
)// Con esta linea lo que indicamos es que se va a renderizar el componente App en el elemento con id 'root' del HTML.
