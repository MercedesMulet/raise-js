// array para carrito
let cart = [];
const LScart = localStorage.getItem("cart")

// funcion para guardar en storage
function saveOnStorage() {
    let storageItem = localStorage.setItem('cart', JSON.stringify(cart));
    return storageItem;
};

if (LScart) {
    cart = JSON.parse(LScart);
};

// funcion para agregar al carrito
function addCart(producto) {

    // icono plus carrito en el nav
    let cartNav = document.getElementById("cartNav");
    let alertCart = document.createElement("i");
    alertCart.className = "alert-cart";
    alertCart.innerHTML = `<i class="fas fa-plus-circle"></i>`;
    cartNav.appendChild(alertCart);

    // agrego los productos seleccionados al carrito
    cart.push({
        categoria: producto.categoria,
        codigoRaise: producto.codigoRaise,
        precio: producto.precio,
    });

    let cartTable = document.getElementById("cartTable");
    let cartContent = document.getElementById("cartContent");

    let row = document.createElement("TR");

    let col1 = document.createElement("TD");
    col1.innerHTML = `${producto.categoria}<br>${producto.codigoRaise}`;

    let col2 = document.createElement("TD");
    col2.innerHTML = `$${producto.precio}`;

    // contador 
    let col3 = document.createElement("TD");
    col3.innerHTML = `<input type='number' name='productQty' id='productQty' value='1'></input>`;

    // suma total SALE MAL
    let col4 = document.createElement("TD");
    col4.innerHTML = 0;

    // creo botón para eliminar
    let col5 = document.createElement("i");
    col5.className = "delete-item";
    col5.innerHTML = `<i class="fas fa-trash-alt"></i>`;

    // evento eliminar
    col5.addEventListener("click", (e) => {
        cartContent.removeChild(row);
        cartNav.removeChild(alertCart);
        localStorage.removeItem('cart');
    });

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);

    cartContent.appendChild(row);
    cartTable.appendChild(cartContent);

};