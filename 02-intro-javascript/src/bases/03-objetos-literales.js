const persona = {
nombre: 'Tony',
apellido: 'Stark',
edad: 45,
direccion:{
    ciudad: 'New York',
    zip: 55678,
    lat: 14.3232,
    long: 34.9233
    }
};

//console.table ( { persona } );
const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log (  persona  );
console.log(persona2);