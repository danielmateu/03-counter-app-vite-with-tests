import { render,screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

const title = "Hola, Soy Goku"

describe('Pruebas en <>FirstApp</>', () => { 

    test('Debe de hacer match con el snapshot', () => { 

    const { container } = render(<FirstApp title = {title}/>)
    expect ( container ).toMatchSnapshot();

    })

    test('Debe mostrar el mensaje "Hola, Soy Goku"', () => { 

        render(<FirstApp title = {title}/>);
        expect(screen.getByText).toBeTruthy();
        screen.debug(); //Para ver el objeto
    })

    test('Debe de mostrar el título en un h1', () => { 
        
        render(<FirstApp title = {title}/>);
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title)
    })

    test('Debe de mostrar el subtitulo enviado por las props', () => { 
        
        const subTitle = 'Hola, soy un subtitulo';
        render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
            )
        expect(screen.getAllByText(subTitle).length).toBe(2);
    })
})