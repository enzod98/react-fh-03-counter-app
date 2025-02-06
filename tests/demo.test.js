



describe('Pruebas en <DemoComponent />', () => {  
    test('esta prueba no debe de fallar', ()=> {
        
        //1. Inicialización
        const message1 = 'Hola mundo!';
        
        //2. estímulo
        const message2 = message1.trim();
        
        //3. Observaciones
        // expect( message1 ).toBe( message2 );
        expect(message1).toBe(message2);
        
    })
})