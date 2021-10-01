let cartContent = document.getElementById("cartContent");
let totalCart = document.getElementById("totalCart");

const cart = [];

function saveOnStorage() {
    let storageItem = localStorage.setItem("cart", JSON.stringify(cart));
    return storageItem;
}

function addProduct(producto) {
    cart.push({
        categoria: producto.categoria,
        codigoRaise: producto.codigoRaise,
        precio: producto.precio,
        cantidad: 1,
    });
    console.log(cart);
}

function priceAcum(producto, cant) {
    let subTotal = producto.precio * cant;
    return subTotal;
};

function freshSubTotal(producto) {
    let subDos = document.getElementById(`${producto.codigoRaise}-sub`);
    subDos.innerHTML = `$${priceAcum(producto, producto.cantidad)}`;
};

function showTotal() {
    let total = 0;
    cart.map(producto => {
        total += priceAcum(producto, producto.cantidad);
    })
    totalCart.innerHTML = `$${total}`;
};

function listProduct(producto, first) {
    let row = document.createElement("TR");
    let col1 = document.createElement("TD");
    let col2 = document.createElement("TD");
    let col3 = document.createElement("TD");
    let col4 = document.createElement("TD");
    let col5 = document.createElement("TD");

    col1.innerHTML = `${producto.categoria}<br>${producto.codigoRaise}`;
    col2.innerHTML = `$${producto.precio}`;

    let minus = document.createElement('button');
    minus.innerHTML = "-";
    minus.onclick = function () {decrease(producto.codigoRaise)};
    let plus = document.createElement('button');
    plus.innerHTML = '+';
    plus.onclick = function () {increase(producto.codigoRaise)};
    let quant = document.createElement('p');
    quant.setAttribute('id', producto.codigoRaise);
    quant.innerHTML = first ? 1 : parseInt(producto.cantidad);

    col3.appendChild(plus);
    col3.appendChild(quant);
    col3.appendChild(minus);

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);

    cartContent.appendChild(row);   
    cartTable.appendChild(cartContent);

    col4.setAttribute('id', `${producto.codigoRaise}-sub`);
    col4.innerHTML = first ? `$${producto.precio}` : `$${priceAcum(producto, producto.cantidad)}`;

    // botón para eliminar item del carrito
    col5.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    col5.className = "delete-item";

    // evento eliminar NO FUNCIONA
    col5.addEventListener("click", (e) => {
        cartContent.removeChild(row);
        cart = cart.filter(prod => prod.codigoRaise !== producto.codigoRaise);// ESTO NO FUNCIONA
        saveOnStorage();// ESTO NO FUNCIONA
    });
};

function showProduct(producto, first = false) {
    listProduct(producto, first);
    /* priceAcum(product, product.cantidad); */
    showTotal(producto, producto.cantidad);
};

function findAndAddProduct(producto) {
    for (let item of cart) {
        if (item.codigoRaise === producto.codigoRaise) {
            item.cantidad++;
        } else {
            const findProduct = cart.find(
                (prod) => prod.codigoRaise === producto.codigoRaise
            );
            if (!findProduct) {
                addProduct(producto);
                showProduct(producto);
            };
        };
    };
};

function addCart(producto) {
    if (!cart.length) {
        addProduct(producto);
        showProduct(producto, true);
    } else {
        findAndAddProduct(producto);
    };
};

function decrease(codigo) {
    let counter = document.getElementById(codigo);
    if (parseInt(counter.innerHTML) == 1) {
        return
    } else {
        counter.innerHTML = parseInt(counter.innerHTML) - 1;
        let toDecrease = cart.find(prod => prod.codigoRaise === codigo);
        toDecrease.cantidad--;
        freshSubTotal(toDecrease);
        showTotal();
        saveOnStorage();
    }
};

function increase(codigo) {
    let counter = document.getElementById(codigo);
    if (parseInt(counter.innerHTML) == 5) {
        return
    } else {
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
        let toIncrease = cart.find(prod => prod.codigoRaise === codigo);
        toIncrease.cantidad++;
        freshSubTotal(toIncrease);
        showTotal();
        saveOnStorage();
    }
};  