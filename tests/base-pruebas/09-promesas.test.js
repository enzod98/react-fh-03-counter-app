import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";


describe('Pruebas en 09-promesas.js', () => { 
    test('getHeroeByIdAsync debe retornar un heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
        .then( hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();
            });
    })

    test('getHeroeByIdAsync debe obtener un error si héroe no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toBeFalsy();
            done();
        })
        .catch( err => {
                expect(err).toBe('No se pudo encontrar el héroe con id ' + id)
                done();
            });
    })
 })