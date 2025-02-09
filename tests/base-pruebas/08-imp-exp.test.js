import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas de 08-imp-exp', () => { 
    test('getHeroeByID debe retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    })

    test('getHeroeByID debe retornar undefined si no existe el ID', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect( hero ).toBeFalsy();
    })

    test('getHeroesByOwner retornar 3 heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect( heroes.length ).toBe(3);
        expect(heroes.filter((heroe) => heroe.owner === 'DC')).toEqual(heroes);
    })

    test('getHeroesByOwner debe retornar 2 héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect( heroes.length ).toBe(2);
    })

 })
