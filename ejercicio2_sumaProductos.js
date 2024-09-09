//2. Escribe una función que tome un arreglo de objetos JSON que representan productos, y
//devuelva un objeto que contenga la suma de los precios de los productos, la cantidad
//total de productos, y el nombre del producto más caro. Utiliza el spread operator, la
//función reduce, map y sort para calcular los valores necesarios.

const productos = [
    { nombre: 'Leche', precio: 50000, cantidad: 3 },
    { nombre: 'Queso', precio: 20000, cantidad: 5 },
    { nombre: 'Arroz', precio: 15000, cantidad: 2 }
];

function calcularProductos(productos) {
    // Suma total de los precios, considerando la cantidad de cada producto
    const totalPrecio = productos.reduce((acum, { precio, cantidad }) => acum + (precio * cantidad), 0);

    // Cantidad total de productos
    const cantidadTotal = productos.reduce((acum, { cantidad }) => acum + cantidad, 0);

    // Encontrar el producto más caro
    const productoMasCaro = productos.reduce((masCaro, producto) => 
        producto.precio > masCaro.precio ? producto : masCaro, productos[0]).nombre;

    return { totalPrecio, cantidadTotal, productoMasCaro };
}

console.log(calcularProductos(productos));