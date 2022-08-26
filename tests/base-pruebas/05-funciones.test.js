import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe devolver un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        // console.log(user)

        expect(testUser).toEqual(user)

    });

    test('getUsuarioActivo debe devolver un objeto y se le debe pasar un nombre como parámetro', () => { 

        const nombre = ('Luis')

        const testGestUsuarioActivo = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre)

        expect(testGestUsuarioActivo).toEqual(user);

        
    })
})