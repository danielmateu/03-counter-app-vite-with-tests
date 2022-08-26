
import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Pruebas en 06-deses-obj', () => { 

    test('usContext debe devolver un objeto', () => { 

        
        const obj = {
            clave: 'Capitán America',
            nombre: 'Steve Rogers', 
            edad: 35, 
            rango : 'Capitán' 
        }
        const {clave, edad} = obj;

        const character = usContext(obj)

        expect(character).toEqual(
            {   
                nombreClave: clave,
                anios: edad,
                latlng: {
                    lat: 14.1232,
                    lng: -12.3232
                }
            }
        );



    })
})