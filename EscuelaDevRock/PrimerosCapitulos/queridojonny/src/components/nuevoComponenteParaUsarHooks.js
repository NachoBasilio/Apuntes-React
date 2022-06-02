import React, {useState, useEffect} from "react";
import '../assets/css/saludo.css'

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
                <h1 className="contadorTutulo">Contado{valor === 102 ? ("R"): ("r")}</h1>
                <div className="contenedorDeBotones">
                <button onClick={handleClick} name="suma">Contar cositas</button>
                <div>{valor}</div>
                {valor > 0 ? (<button onClick={handleClick} name="resta">Descontar Cositas</button>) : null}
                </div>
                {valor === 100 ? (<div className="contadorTutulo">Wow, contaste cien cositas</div>) : null}
            </div>
        </div>
    );
}

export default HeaderCopado;