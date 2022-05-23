import '@testing-library/jest-dom'//Para que aparezcan las ayudas en el visual studio code

import { getSaludo } from '../../base/02-template-string'

describe('test de template string', () => {

    test('prueba en el metodo getSaludo', () => {
        
        const nombre = 'Juan';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe(`Hola ${nombre}`);

    });

    test('prueba del default del nombre', () => {

        const saludo = getSaludo();

        expect(saludo).toBe(`Hola Carlos`);

    });

})