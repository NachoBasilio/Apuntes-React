import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/somos">Somos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/productos">Productos</Link></li>
            </ul>
        </header>
    </div>
  )
}
