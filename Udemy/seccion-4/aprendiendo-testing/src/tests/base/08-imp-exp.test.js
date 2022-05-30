import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from '../../data/heroes';


describe('prueba en fucniones de heroes', () => { 
    test('debe de retornar un heroe', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeOriginal = heroes.find( (heroe) => heroe.id === id);
        expect(heroe).toEqual(heroeOriginal);
    })

    test('debe retornar undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);//Como el undefined es un primitivo usamos el toBe
    })

    test('debe retorar los heroes de marvel', ()=>{
        const owner = 'Marvel'
        const getHoreoes = getHeroesByOwner(owner)
        const HeroesOriginal = heroes.filter((ownerOr)=>ownerOr.owner === owner)
        expect(getHoreoes).toEqual(HeroesOriginal)
    })

    test('debe retorar los heroes de dc', ()=>{
        const owner = 'DC'
        const getHoreoes = getHeroesByOwner(owner)
        const HeroesOriginal = heroes.filter((ownerOr)=>ownerOr.owner === owner)
        expect(getHoreoes).toEqual(HeroesOriginal)
    })
 })
