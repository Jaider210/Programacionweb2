//5. Dado un arreglo de objetos JSON que representan productos, escribe una función que devuelva un nuevo arreglo que contenga 
//solo los productos que tengan un precio mayor a $80000 y una cantidad inferior a 100, luego a cada producto se debe agregar una
//nueva propiedad "product_tax_value" que represente el precio con el impuesto del 19%

let productos = [
    { id_product: 1, product_name: 'Camiseta', product_price: 50000, product_quantity: 89 },
    { id_product: 2, product_name: 'Pantalón', product_price: 90000, product_quantity: 44 },
    { id_product: 3, product_name: 'Chaqueta', product_price: 160000, product_quantity: 23 },
    { id_product: 4, product_name: 'Correa', product_price: 80000, product_quantity: 104 }
];

function filtroProductosConImpuesto(productos) {
    return productos
        .filter(producto => producto.product_price > 80000 && producto.product_quantity < 100)
        .map(producto => {
            const impuesto = producto.product_price * 0.19;
            return {
                ...producto,
                product_tax_value: impuesto,
                product_total_value: producto.product_price + impuesto
            };
        });
}

console.log(filtroProductosConImpuesto(productos));
