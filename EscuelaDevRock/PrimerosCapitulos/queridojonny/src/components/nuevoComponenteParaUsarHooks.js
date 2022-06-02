import React, {useState, useEffect} from "react";
import '../assets/css/saludo.css'
import Cuenta from "./cuenta";

const HeaderCopado = () => {
    const [valor, setValor] = useState(0);
    const handleClick = (e) => {
        const operacion = e.target.getAttribute("name")
        if (operacion === 'suma') {
            setValor(valor + 1);
        }else if (operacion === 'resta') {
            setValor(valor - 1);
        }
    }

    useEffect(() => {
        console.log('Se ejecuto el useEffect');
        return () => {}
        /* Cuando un componente que esta escuchando useEffect se va, se ejecuta lo que hay en el return */
    },[])

    return (
        <div >
            <div className="contenedor">
                <Cuenta valor={valor} handleClick={handleClick} />
            </div>
        </div>
    );
}

export default HeaderCopado;