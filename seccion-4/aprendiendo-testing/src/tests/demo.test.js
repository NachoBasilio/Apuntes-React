test( 'debe de ser true', () => {

    const isActive = true;

    if (!isActive) {
        throw new Error('No esta activo');
    }
    //Asi se hacen las pruebas en teoria, primero se inicializa la variable y luego se hace el test (Osea estamos afirmando algo)
    
})

//jest ya viene instalado cuando hacemos un create-react-app