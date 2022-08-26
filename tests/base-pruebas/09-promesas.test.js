import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"
import heroes from "../../src/data/heroes";


describe('Pruebas sobre 09-promesas', () => { 

    test('getHeroeByIdAsync debe devolver un héroe por ID de forma asincrona en 1 segundo', (done) => { 
        
        const id = 1;
        getHeroeByIdAsync(id)
        .then(heroe => {

            expect(heroe).toEqual(heroes[(id - 1)]);
            done();

        })
        .catch(done);

    });

    test('getHeroeByIdAsync debe de obtener un error si el heroe no existe', (done) => { 
        const id = 100;
        
        getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toBeFalsy();
            done()
        })
        .catch(error => {
            // console.log(error)
            expect(error).toBe(`No se pudo encontrar el héroe con el ${id}`);
            done();
        })

    })
})