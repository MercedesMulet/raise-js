let contenedor = "";
let resumen = "";
let resumenTotal = "";

let almacenados = JSON.parse(localStorage.getItem("carrito"));
console.log(almacenados);

if ($.isEmptyObject(almacenados) === true) {
    console.log("vacio");
}
let contenedorCarrito = document.getElementById('cartTable');
let contenedorResumen = document.getElementById('resumen');
let contenedorTr = document.getElementById('cartContent');


let subtotalProducto = almacenados.map( img => img.cantidad * img.precio);
let subtotal = subtotalProducto.reduce( (a,b) => (a+b) );
console.log(subtotalProducto);
console.log(subtotal);

let total = subtotal + 250

// CARGA DATOS CARRITO EN PAGINA CARRITO


for (const producto of almacenados) {
    contenedor = document.createElement("tr");
    contenedor.innerHTML = `
    <td>${producto.codigoRaise}</td>
    <td>${producto.precio}</td>
    <td>${producto.cantidad}</td>
    <td>${producto.cantidad * producto.precio}</td>
    `
    contenedorCarrito.appendChild(contenedor);

}

// PREPEND SUBTOTAL
resumen = document.createElement("tr");
resumen.innerHTML = `<th scope="row">Subtotal</th>
<td>$${subtotal}</td>
</tr>`
contenedorResumen.prepend(resumen);

// APPEND TOTAL
resumenTotal = document.createElement("tr");
resumenTotal.innerHTML = `<th scope="row">Total</th>
<td>$${total}</td>
</tr>
`
contenedorTr.appendChild(resumenTotal);