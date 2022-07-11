import React, {useEffect} from 'react';

const DidMountHook = () => {
    useEffect(() => {
        console.log("Comportamiento antes de que el componente sea añadido al DOM")
    }, [ ]);

    return (
        <div>
            <didMount></didMount>
        </div>
    );
}

export default DidMountHook;
