import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.js', () => { 
    test('getImagen debe returnar el url de la imagen', async () => {
        const resp = await getImagen();

        expect(resp).toBe('No se encontró la imagen');
    })
 })