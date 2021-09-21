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
    let minus = document.createElement('button');
    let counter = document.createElement('input');
    let plus = document.createElement('button');

    minus.innerHTML = '-';
    minus.onclick = function() {decrease()};
    plus.innerHTML = '+'; 
    plus.onclick = function() {increase()};

    counter.type = 'text';
    counter.id = 'productQty';
    counter.value = parseInt('1');
    counter.min = parseInt('1');
    counter.max = parseInt('5');
    counter.name = 'productQty';

    function decrease() {
        if (counter.value == 1) {
            return
        } else {
            counter.value--
        }
    };

    function increase() {
        if (counter.value == 5) {
            return
        } else {
            counter.value++
        }
    }

    col3.appendChild(minus);
    col3.appendChild(counter);
    col3.appendChild(plus);

    console.log(counter.value);

    /* 

    var inputVal = document.getElementById('productQty');
    inputVal.onclick = function getValue() {
        counter.value++;
    };

    console.log(counter.id);
    console.log(counter.value);
    console.log(inputVal); */

    // suma total SALE MAL
    let col4 = document.createElement("TD");
    col4.innerHTML = '0';
    /* let resume = producto.precio * counter.value;
    console.log(resume);
    col4.innerHTML = `$${resume}`; */

    // botón para eliminar item del carrito
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