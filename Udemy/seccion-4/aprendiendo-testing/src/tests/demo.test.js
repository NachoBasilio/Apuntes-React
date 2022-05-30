describe('pruebas de demo.js', () => {

    test( 'deben ser iguales los strings', () => {
    
        //Inicialización de variables
        const mensaje = "Hola a todos!"
    
        //Estimulo
        const mensaje2 = `Hola a todos!`
    
        //Comparación y observación
        expect( mensaje ).toBe( mensaje2 )
    
    })

})



//jest ya viene instalado cuando hacemos un create-react-app