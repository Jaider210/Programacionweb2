//3. Dado un arreglo de números, escribe una función que devuelva un nuevo arreglo que
//contenga solo los números pares, y cada número se multiplique por 2. Utiliza la función
//filter y la función map.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numerosParesMultiplicados(numbers));

function numerosParesMultiplicados(arr) {
    return arr.filter(num => num % 2 === 0).map(num => num * 2);
}

