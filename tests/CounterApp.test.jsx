import { fireEvent, render, screen} from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";



describe('Pruebas sobre <CounterApp/>', () => { 

    const initialValue = 10;

    test('Debe hacer match con el snapshot', () => { 
        const {container} = render(<CounterApp value = {initialValue}/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el valor inicial de 100 <CounterApp value={100}/>', () => { 
        render(<CounterApp value = {100}/>);
        expect(screen.getByText(100)).toBeTruthy();

        expect(screen.getByRole('heading', {level:2}).innerHTML).toContain('100')
    });

    test('Debe de incrementar con el boton suma', () => { 
        render(<CounterApp value = {initialValue}/>);
        fireEvent.click(screen.getByText('Suma 1'))
        expect(screen.getByText('11')).toBeTruthy();
    });

    test('Debe de decrementar con el boton resta', () => { 
        render(<CounterApp value = {initialValue}/>);
        fireEvent.click(screen.getByText('Resta 1'));
        // screen.debug();
        expect(screen.getByText('9')).toBeTruthy();
    });

    test('Debe de funcionar el boton reset', () => {
        render(<CounterApp value = {355}/>);
        fireEvent.click(screen.getByText('Suma 1'))
        fireEvent.click(screen.getByText('Suma 1'))
        fireEvent.click(screen.getByText('Suma 1'))
        // fireEvent.click(screen.getByText('Reset'));

        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
        // screen.debug();
        expect(screen.getByText(355)).toBeTruthy();
    })
})