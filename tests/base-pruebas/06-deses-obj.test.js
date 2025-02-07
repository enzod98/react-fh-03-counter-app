import { usContext } from "../../src/base-pruebas/06-deses-obj";


describe('Pruebas en 06-deses-obj.js', () => { 
    test('Debe retornar un objeto', () => {
        const payload = {
            clave: '123456',
            edad: 26,
        }

        const context = usContext(payload);
        console.log(context);

        expect(context).toStrictEqual({
            nombreClave: payload.clave,
            anios: payload.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })

    });
 });