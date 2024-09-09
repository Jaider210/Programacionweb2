///1. Escribe una función que tome un arreglo de objetos JSON que representan productos, y
// devuelva la suma de los precios de los productos y la suma total del valor del stock de la tienda. 
// Utiliza la función reduce y el spread operator para obtener los precios de cada objeto y sumarlos   

const productos = [
    { nombre: 'Leche', precio: 50000, cantidad: 3 },
    { nombre: 'Queso', precio: 20000, cantidad: 5 },
    { nombre: 'Arroz', precio: 15000, cantidad: 2 }
];

function SumaYStock(productos) {
    const resultado = productos.map(producto => {
        const { nombre, precio, cantidad } = producto;
        const precioTotal = precio * cantidad;
        return { nombre, precio, cantidad, precioTotal };
    });

    const totalStock = resultado.reduce((acumulador, producto) => acumulador + producto.precioTotal, 0);

    return { resultado, totalStock };
}

console.log(SumaYStock(productos));