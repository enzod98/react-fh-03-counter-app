import { getByText, render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => { 
    // test('Debe de hacer match con el snapshot', () => {
    //     const title = 'Hola, soy Esno';
    //     const { container } = render( <FirstApp title={title} /> );
    //     expect( container ).toMatchSnapshot();

    // })
    
    test('Debe de mostrar un título en h1', () => {
        const title = 'Hola, soy Esno';
        const { container, getByText, getByTestId } = render( <FirstApp title={title} /> );
        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title')).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toContain(title);
        

    })

    test('Debe de mostrar el subtítulo enviado por props', () => {
        const title = 'Hola, soy Esno';
        const subtitle = 'Soy un subtitulo enviado por props';
        const { getAllByText } = render( 
            <FirstApp title={title} subtitle={subtitle} /> 
        );

        expect(getAllByText(subtitle).length).toBe(2);

    })
 })