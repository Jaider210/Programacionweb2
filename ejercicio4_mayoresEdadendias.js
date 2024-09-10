//4. Dado un arreglo de objetos JSON que representan usuarios, escribe una función que
//devuelva un nuevo arreglo que contenga solo los usuarios mayores de edad (18 años o más), 
//y para cada usuario se agregue una nueva propiedad "age_in_days" que
//represente la edad del usuario en días. Utiliza el spread operator, la función map y filter.


const users  = [
    { name: 'Carlos', age: 20 },
    { name: 'Juana', age: 17 },
    { name: 'Oliver', age: 25 },
    { name: 'Oliver', age: 30 },
];


function MayoresEdad(users) {
    return users
        .filter(users => users.age >= 18)
        .map(users => ({
            ...users,
            age_in_days: users.age * 365
        }));
}

console.log(MayoresEdad(users));