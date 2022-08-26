import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";




describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe retornar un heroe por id', () => { 
        const id = 1;
        const hero = getHeroeById(id);
        
        expect(hero).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );
    });

    test('getHeroeById debe retornar undefined por id inexistente', () => { 
        const id = 100;
        const hero = getHeroeById(id);
        // console.log(hero)
        expect(hero).toBeFalsy(); //Nulo, undefined o false
    });

    /*
        Tarea: 
        Debe de retornar un arreglo con los heroes de DC
        Length === 3
        toEqual al arreglo filtrado

        Debe de retornar un arreglo con los heroes de Marvel
        length === 2
    */ 

    test('getHeroeByOwner debe retornar un arreglo con los heroes de DC', () => { 

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ])

        expect(heroes.length).toBe(3);

        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner));
    });

    test('getHeroeByOwner debe retornar un arreglo con los heroes de Marvel', () => { 

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        // console.log(heroes);

        expect(heroes).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);

        expect(heroes.length).toBe(2)
    })
})