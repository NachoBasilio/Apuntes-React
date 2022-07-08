import React, {useState, useContext} from 'react';

const miContexto = React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            El Token es: {state.token}
            <Componente2></Componente2>
        </div>

    );
}

const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>
                la sesion es: {state.sesion}
            </h2>
        </div>
    );
}

const ComponenteConContexto = () => {

    const estadoInicial = {
        token: '6165156',
        sesion: 1
    }

    const [dataSesion, setDataSesion] = useState(estadoInicial)

    function actualizarSesion(){
        setDataSesion({
            token: '123123df',
            sesion: dataSesion.sesion + 1
        })
    }

    return (
        <miContexto.Provider value={dataSesion}>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar</button>
        </miContexto.Provider>
    );
}

export default ComponenteConContexto;

