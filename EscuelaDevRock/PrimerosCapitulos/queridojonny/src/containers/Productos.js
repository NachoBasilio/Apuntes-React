import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Listado from '../components/Listado'

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
            <Listado productos={productos} />
        </div>
    )
}
