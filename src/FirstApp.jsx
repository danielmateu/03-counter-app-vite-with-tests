import PropTypes from "prop-types";

// Fragment: Agrupador de elementos de HTML <></>

//Impresion de variables, usamos las llaves para imprimier las variables, no podemos usar objetos!

const nombre = 'Daniel Mateu';
const newMessage = [1,2,3,4,5,6,7,8,9];

//Si queremos imprimir objetos, lo podemos hacer evaluando expresiones de React:

// const obj = {
//   nombre: 'Dani',
//   message: 'Hola',
// }

//Ejercicio, crear  función saludo e imprimir el resultado como variable

const saludo = (name) => `Hola ${name}`;

//Si no hay ninguna dependencia del componente en la función, podemos colocar las funciones o variables fuera del componente

//Comunicacion entre componentes (props), es información que fluye desde el componente padre hasta el hijo. Es muy MUY Común desustructurar las props entre llaves, con lo que realmente necesitemos.

//Tambien le podemos pasar parámetros por defecto, en el caso que no se los pasemos desdel el componente padre. {title = '🙃', subTitle='💀'}

//propTypes no vienen instalados en Vite por defectp en CRA si! 

export const FirstApp = ( {title, subTitle, name } ) => {

  // console.log(title)

  // if(!title){
  //   throw new Error('El título no existe...')
  // }

  return (
    <>
        <h1 data-testid='test-title'>{title}</h1>
        {/* <h1>{saludo('Dani')} 💀</h1>  */}
        {/* <p>{newMessage}</p> */}
        {/* <p>{JSON.stringify(obj)}</p> */}
        
        <p>{subTitle}</p>
        <p>{subTitle}</p>
        <p>{saludo(name)}</p>
    </>
  )
}

//Proptypes -> Nos ayudan a nosotros y a otros programadores como funciona nuestro componente, obligando a pasar datos de forma prototipada, desde el componente padre e hijo

FirstApp.proptypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

//Default props, entran antes que los propTypes.

FirstApp.defaultProps = {
  name: 'Dani',
  subTitle: 'No hay subtitle',
  // title: 'No hay titulo',
}