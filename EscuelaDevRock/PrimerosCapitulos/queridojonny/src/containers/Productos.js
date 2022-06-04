import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Productos() {
    const [productos, setProductos] = useState([])
    
    let TraeProductos = async () => {
        const res = await axios.get("https://fakerapi.it/api/v1/products?_quantity=10&_taxes=12&_categories_type=uuid")
       
        setProductos(res.data.data)
        console.log(productos)
    }

    useEffect(() => {
        TraeProductos()
    },[])
        
    return (
        <div>
            <h1>Productos:</h1>
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
