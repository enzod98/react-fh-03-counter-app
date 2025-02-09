import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => { 
    const valor = 100;
    test('Debe coincidir con el snapshot', () => {
        const {container} = render(<CounterApp value={valor} />)
        expect(container).toMatchSnapshot();
    })
    
    test('Debe tener valor inicial de 100', () => {
        render(<CounterApp value={valor} />)
        // expect(screen.getByText(valor)).toBeTruthy();
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(valor.toString());
    })

    test('Debe de incrementar con el botón +1', () => {
        render(<CounterApp value={valor} />)
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
    })

    test('Debe de decrementar con el botón -1', () => {
        render(<CounterApp value={valor} />)
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();
    })

    test('Debe de volver al valor inicial al tocar reset', () => {
        render(<CounterApp value={valor} />)
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));

        expect(screen.getByText(valor.toString())).toBeTruthy();
    })
 })