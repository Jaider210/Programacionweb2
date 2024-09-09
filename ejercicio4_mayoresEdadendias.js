//4. Dado un arreglo de objetos JSON que representan usuarios, escribe una función que
//devuelva un nuevo arreglo que contenga solo los usuarios mayores de edad (18 años o más), 
//y para cada usuario se agregue una nueva propiedad "age_in_days" que
//represente la edad del usuario en días. Utiliza el spread operator, la función map y filter.

function MayoresEdad(usuarios) {
    return usuarios
        .filter(usuario => usuario.edad >= 18)
        .map(usuario => ({
            ...usuario,
            age_in_days: usuario.edad * 365
        }));
}

const usuarios = [
    { nombre: 'Jefferson', edad: 17 },
    { nombre: 'Camilo', edad: 30 },
    { nombre: 'Miguel', edad: 27 },
    { nombre: 'Jhaider', edad: 33 }
];

console.log(MayoresEdad(usuarios));