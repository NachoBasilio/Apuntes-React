import { retornaArreglo } from "../../base/07-deses-arr";

describe('pruebas en desestructuracion', () => {
    
    test('debe dar un array y un numero', () => {//Si hacemos varios test en una prueba, se ejecutan como uno

        const [letras, numeros] = retornaArreglo()
        const letra = 'ABC'
        const numero = 123

        expect(letras).toBe(letra)
        expect(typeof(letra)).toBe('string')

        expect(numeros).toBe(numero)
        expect(typeof(numero)).toBe('number')
    });
    

});
