import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funecione.js', () => {
    test('getUser debe retornar un objeto', () => {

        const user = getUser();
        const userOri = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        expect(user).toEqual(userOri);//Cuando trabalamos con objetos, usamos toEqual
    })

    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Nacho'

        const objeOri = {
            uid: 'ABC567',
            username: nombre
        }

        const obj = getUsuarioActivo(nombre);

        expect(obj).toEqual(objeOri);

    })
})