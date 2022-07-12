import React, {useEffect} from 'react';

const WillUnMountHook = () => {
    useEffect(() => {
        return () => {
            console.log("ripeo el componetne")
        };
    });
    return (
        <div>
            
        </div>
    );
}

export default WillUnMountHook;
