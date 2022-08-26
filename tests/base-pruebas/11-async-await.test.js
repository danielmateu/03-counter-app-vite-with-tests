import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Puebas en 11-async-await', () => { 
    test('getImagen deberia devolver un url de la imagen', async() => { 

        const url = await getImagen();
        expect(typeof url).toBe('string');

    });
    
    test('getImagen deberia retornar un error si no tenemos la API Key', async() => { 

        const resp =  await getImagen();
        console.log(resp);
        expect(resp).toBe('No se encontró la imagen');

    })
})