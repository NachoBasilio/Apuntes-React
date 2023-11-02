import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(//El signo de exclamación es para decirle a typescript que no se preocupe que el elemento no es nulo
  <App />
)
