import React from "react";
// import MiPrimerComponenteConBootstrap from "../components/primerComponente";
import HeaderCopado from "../components/nuevoComponenteParaUsarHooks";

const App = () => {
    return (
    <div className="App">
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
        />
        <HeaderCopado />
        </div>
    );
}

export default App;