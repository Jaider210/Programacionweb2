//2. Escribe una función que tome un arreglo de objetos JSON que representan productos, y
//devuelva un objeto que contenga la suma de los precios de los productos, la cantidad
//total de productos, y el nombre del producto más caro. Utiliza el spread operator, la
//función reduce, map y sort para calcular los valores necesarios.

const productos = [
    { id_product: 1, product_name: 'Camiseta', product_price: 50000, product_quantity: 89 },
    { id_product: 2, product_name: 'Pantalón', product_price: 90000, product_quantity: 44 },
    { id_product: 3, product_name: 'Chaqueta', product_price: 160000, product_quantity: 23 },
    { id_product: 4, product_name: 'Correa', product_price: 80000, product_quantity: 104 }
];

function calcularProductos(productos) {

    const totalPrecio = productos.reduce((acum, { product_price, product_quantity }) => acum + (product_price * product_quantity), 0);

    const cantidadTotal = productos.reduce((acum, { product_quantity }) => acum + product_quantity, 0);

    const productoMasCaro = productos.reduce((masCaro, producto) => 
        producto.product_price > masCaro.product_price ? producto : masCaro, productos[0]);

    return { totalPrecio, 
             cantidadTotal, 
             productoMasCaro: productoMasCaro.product_name,
             product_price: productoMasCaro.product_price,
             product_quantity: productoMasCaro.product_quantity
            };
}
console.log(calcularProductos(productos));