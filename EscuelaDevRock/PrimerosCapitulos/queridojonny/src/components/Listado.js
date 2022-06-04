import React from 'react'

export default function Listado({productos}) {
  return (
    <div>
        <ul>
            {productos.map(producto => (
                <li key={producto.id}>
                    <h2>{producto.name}</h2>
                    <p>{producto.description}</p>
                    <p>{producto.price}</p>
                    <p>{producto.category}</p>
                    <img src={producto.image} alt={producto.name} />
                </li>
            ))}
        </ul>
    </div>
  )
}
