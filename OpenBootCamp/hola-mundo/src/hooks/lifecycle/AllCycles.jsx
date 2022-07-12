import React, {useEffect} from 'react';

const AllCycles = () => {
    useEffect(() => {
        console.log('componente creado o actualizado')

        const interval = setInterval(() =>{
            document.title = `${new Date()}`
            console.log('actualizacion')
        }, 1000)
        return () => {
            console.log('DEsaparece el componente')
            clearInterval(interval)
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
