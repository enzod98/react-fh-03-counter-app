import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"


describe('pruebas', () => { 
    test('getuser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toEqual(user);

    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Enzo';

        const activeUser = getUsuarioActivo(name);
        expect(activeUser).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
    });
 })