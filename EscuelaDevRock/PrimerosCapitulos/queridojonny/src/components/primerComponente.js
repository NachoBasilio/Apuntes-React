import React from 'react';
import '../assets/css/saludo.css'

const MiPrimerComponenteConBootstrap = () => {
    let nombre = "Nacho";
    return (
        <div className="saludo">    
            <h1>Esto es un super ejemplo de que pude installar bootstrap <span class="badge bg-secondary">{nombre}</span></h1>
            <button type="button" class="btn btn-primary position-relative">
                    Inbox
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span class="visually-hidden">unread messages</span>
            </span>
            </button>
        </div>
    )
}

export default MiPrimerComponenteConBootstrap;