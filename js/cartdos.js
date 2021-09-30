let cartContent = document.getElementById("cartContent");
let totalCart = document.getElementById("totalCart");

const cart = [];

let cantidad = 1;
let total = 0;
let row = document.createElement("TR");
let col1 = document.createElement("TD");
let col2 = document.createElement("TD");
let col3 = document.createElement("TD");
let col4 = document.createElement("TD");
let col5 = document.createElement("TD");

let minus = document.createElement('button');
let counter = document.createElement('input');
let plus = document.createElement('button');

minus.innerHTML = "-";
minus.onclick = function () {
    decrease()
};

plus.innerHTML = "+";
plus.innerHTML = '+';
plus.onclick = function () {
    increase()
};

col5.className = "delete-item";

row.appendChild(col1);
row.appendChild(col2);
row.appendChild(col3);
row.appendChild(col4);
row.appendChild(col5);

cartContent.appendChild(row);

function saveOnStorage() {
    let storageItem = localStorage.setItem("cart", JSON.stringify(cart));
    return storageItem;
}


function addProduct(product) {
    cart.push({
        categoria: product.categoria,
        codigoRaise: product.codigoRaise,
        precio: product.precio,
        cantidad,
    });

    // botón para eliminar item del carrito
    col5.innerHTML = `<i class="fas fa-trash-alt"></i>`;
}

function priceAcum(product, cant) {
    let subTotal = product.precio * cant;
    col4.innerHTML = `$${subTotal}`;
}

function showTotal(product, cant) {
    let subTotal = product.precio * cant;
    total = subTotal;
    totalCart.innerHTML = `$${total}`;
}

function listProduct(product) {
    col1.innerHTML = `${product.categoria}<br>${product.codigoRaise}`;
    col2.innerHTML = `$${product.precio}`;
    col3.innerHTML = `${product.cantidad}`;
}

function showProduct(product) {
    listProduct(product);
    priceAcum(product, product.cantidad);
    showTotal(product, product.cantidad);
}

function findAndAddProduct(producto) {
    for (let product of cart) {
        if (product.codigoRaise === producto.codigoRaise) {
            product.cantidad += cantidad;
            showProduct(product);
        } else {
            const findProduct = cart.find(
                (prod) => prod.codigoRaise === producto.codigoRaise
            );
            if (!findProduct) {
                addProduct(producto);
                showProduct(producto);
            }
        }
    }
}

function addCart(producto) {
    if (!cart.length) {
        addProduct(producto);
        cart[0].cantidad = cart[0].cantidad;
        showProduct(cart[0]);
    } else {
        findAndAddProduct(producto);
    }
}

// evento eliminar NO FUNCIONA
col5.addEventListener("click", (e) => {
    cartContent.removeChild(row);
    cart = cart.filter(prod => prod.codigoRaise !== producto.codigoRaise);
    saveOnStorage();
    console.log('holi');
});

//contador
/* counter.type = 'text';
counter.id = product.codigoRaise;
counter.value = parseInt('1');
counter.min = parseInt('1');
counter.max = parseInt('5');
counter.name = 'productQty';
counter.className = 'productQty';
counter.disabled = true;
col3.appendChild(minus);
col3.appendChild(counter);
col3.appendChild(plus);
*/

/* function decrease() {
    if (counter.value == 1) {
        return
    } else {
        counter.value--;
        getResume();
        let toDecrease = cart.find(prod => prod.codigoRaise === producto.codigoRaise);
        toDecrease.cantidad--;
        saveOnStorage();
        getTotal()
    }
};

function increase() {
    if (counter.value == 5) {
        return
    } else {
        counter.value++;
        getResume();
        let toIncrease = cart.find(prod => prod.codigoRaise === producto.codigoRaise);
        toIncrease.cantidad++;
        saveOnStorage();
        getTotal()
    }
}; */