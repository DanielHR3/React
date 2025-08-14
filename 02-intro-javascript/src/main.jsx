// Destructuración
// Asignación Desestructurante

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'Ironman'
};

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const useContext = ({ nombre, edad, clave, rango = 'millonario' })  => {

    // console.log( nombre,edad, clave, rango )
    return {
        nombreClave: clave,
        anios: edad
    }
}

const avenger = useContext(persona);
console.log(avenger.nombreClave, avenger.anios);
