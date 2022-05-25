import { getHeroeByIdAsync } from "../../base/09-promesas"
import heroes from '../../data/heroes';

describe('Preubas de promesas', () => {
    test('Resolver la promesa con asincronsimo y getHeroe', ( done )=> {//El done nos permite ejecutar una funcion despues de que se ejecute la promesa
        const id = 1

        getHeroeByIdAsync(id)
            .then( (heroe) => {
                    expect( heroe ).toBe(heroes[0])
                    done()
                })
    })
    test('Si el heroe no existe', ( done )=> {
        const id = 10
        
        getHeroeByIdAsync(id)
            .catch( err =>{
                    expect( err ).toBe("No se pudo encontrar el héroe")
                    done()
            })

    })
})