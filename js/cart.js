// array para carrito
let cart = [];

// productos repetidos
const LScart = localStorage.getItem("cart");

// si existe el carrito en local storage lo carga en memoria y lo muestra en el dom
if (LScart) {
    cart = JSON.parse(LScart);
    cart.map(producto => {
        addAndShowCart(producto);
    });
    renderPurchBtn();
};

// funcion para guardar en storage
function saveOnStorage() {
    let storageItem = localStorage.setItem('cart', JSON.stringify(cart));
    return storageItem;
};

// funcion para agregar al carrito
function addCart(producto) {
    // referencia al objeto que esta dentro del array Cart
    const findProduct = cart.find(prod => prod.codigoRaise === producto.codigoRaise);
    if (findProduct) {
        if (findProduct.cantidad == 5) {
            return
        } else {
            findProduct.cantidad++;
            let productCounter = document.getElementById(findProduct.codigoRaise);
            productCounter.value = findProduct.cantidad;
        };
    } else {
        addAndShowCart(producto);
    };
};

// calcular subtotal
function freshSubTotal(producto) {
    let subDos = document.getElementById(`${producto.codigoRaise}-subTotal`);
    const findProduct = cart.find(prod => prod.codigoRaise === producto.codigoRaise);
    subDos.innerHTML = `$${findProduct.cantidad * producto.precio}`;
};

// calcular total
function freshTotal() {
    let total = 0;
    let totalCart = document.getElementById('totalCart');
    cart.map(producto => {
        total += producto.cantidad * producto.precio;
    });
    totalCart.innerHTML = `$${total}`;
};

// agregar y mostrar el carrito
function addAndShowCart(producto) {

    // referencia al objeto que esta dentro del array Cart
    const findProduct = cart.find(prod => prod.codigoRaise === producto.codigoRaise);

    if (!findProduct) {
        // agrego los productos seleccionados al carrito
        cart.push({
            categoria: producto.categoria,
            codigoRaise: producto.codigoRaise,
            precio: producto.precio,
            cantidad: 1,
        });
    };

    // creo la tabla para el carrito
    let cartTable = document.getElementById("cartTable");
    let cartContent = document.getElementById("cartContent");

    let row = document.createElement("TR");

    // nombre producto
    let col1 = document.createElement("TD");
    col1.innerHTML = `${producto.categoria}<br>${producto.referencia}`;

    // precio producto
    let col2 = document.createElement("TD");
    col2.innerHTML = `$${producto.precio}`;

    // contador 
    let col3 = document.createElement("TD");
    let minus = document.createElement('button');
    let counter = document.createElement('input');
    let plus = document.createElement('button');

    minus.innerHTML = '-';
    minus.onclick = function () {
        decrease();
    };
    plus.innerHTML = '+';
    plus.onclick = function () {
        increase();
    };

    counter.type = 'text';
    counter.id = producto.codigoRaise;
    counter.value = producto.cantidad ?? 1;
    counter.min = parseInt('1');
    counter.max = parseInt('5');
    counter.name = 'productQty';
    counter.className = 'productQty';
    counter.disabled = true;

    function decrease() {
        if (counter.value == 1) {
            return
        } else {
            counter.value--;
            let toDecrease = cart.find(prod => prod.codigoRaise === producto.codigoRaise);
            toDecrease.cantidad--;
            saveOnStorage();
            freshSubTotal(producto);
            freshTotal();
        };
    };

    function increase() {
        if (counter.value == 5) {
            return
        } else {
            counter.value++;
            let toIncrease = cart.find(prod => prod.codigoRaise === producto.codigoRaise);
            toIncrease.cantidad++;
            saveOnStorage();
            freshSubTotal(producto);
            freshTotal();
        };
    };

    col3.appendChild(minus);
    col3.appendChild(counter);
    col3.appendChild(plus);

    // subtotal 
    let col4 = document.createElement("TD");
    col4.setAttribute('id', `${producto.codigoRaise}-subTotal`);
    col4.class = 'resumeVal';

    // botón para eliminar item del carrito
    let col5 = document.createElement("TD");
    col5.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    col5.className = "delete-item";

    // evento eliminar
    col5.addEventListener("click", (e) => {
        cartContent.removeChild(row);
        // filtro el array cart por los que sean distintos al que estoy removiendo
        cart = cart.filter(prod => prod.codigoRaise !== producto.codigoRaise);
        saveOnStorage();
        freshTotal();
        // eliminar boton comprar
        if (cart.length === 0) {
            let purchBtnDiv = document.getElementById('purchBtnDiv');
            let purchBtn = document.getElementById('purchBtn');
            purchBtnDiv.removeChild(purchBtn);
        };
    });

    // agrego todo a la tabla
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);

    cartContent.appendChild(row);
    cartTable.appendChild(cartContent);

    freshSubTotal(producto);
    freshTotal();
};

// render del boton comprar
function renderPurchBtn() {
    if (cart.length === 1 && cart[0].cantidad === 1) {
        let purchBtnDiv = document.getElementById('purchBtnDiv');
        let purchBtn = document.createElement('a');
        purchBtn.setAttribute('id', 'purchBtn');
        purchBtn.innerHTML = `<button id="purchBtn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>`;
        purchBtn.addEventListener("click", purchaseBtnClicked);
        purchBtnDiv.appendChild(purchBtn);
    };
};

// funcion boton comprar
function purchaseBtnClicked(e) {
    e.preventDefault();
    let cartContent = document.getElementById("cartContent");
    cartContent.innerHTML = "";
    cart = [];
    saveOnStorage();
    let total = 0;
    let totalCart = document.getElementById('totalCart');
    totalCart.innerHTML = `$${total}`;
    purchBtnDiv.innerHTML = "";
};


