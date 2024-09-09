//5. Dado un arreglo de objetos JSON que representan productos, escribe una función que devuelva un nuevo arreglo que contenga 
//solo los productos que tengan un precio mayor a $80000 y una cantidad inferior a 100, luego a cada producto se debe agregar una
//nueva propiedad "product_tax_value" que represente el precio con el impuesto del 19%

function filtroProductosConImpuesto(productos) {
    return productos
        .filter(producto => producto.precio > 80000 && producto.cantidad < 100)
        .map(producto => {
            const impuesto = producto.precio * 0.19;
            return {
                ...producto,
                product_tax_value: impuesto,
                product_total_value: producto.precio + impuesto
            };
        });
}

const productosFiltrados = [
    { nombre: 'Camiseta', precio: 90000, cantidad: 50 },
    { nombre: 'Pantalon', precio: 120000, cantidad: 20 },
    { nombre: 'Buzo', precio: 50000, cantidad: 200 }
];

console.log(filtroProductosConImpuesto(productosFiltrados));
