// array para carrito
let cart = [];

// productos repetidos
const LScart = localStorage.getItem("cart");

if (LScart) {
    cart = JSON.parse(LScart);
    cart.map(producto => {
        function segundaParte() {
            // agrego los productos seleccionados al carrito
            cart.push({
                categoria: producto.categoria,
                codigoRaise: producto.codigoRaise,
                precio: producto.precio,
                cantidad: 1,
            });

            // creo la tabla para el carrito
            let cartTable = document.getElementById("cartTable");
            let cartContent = document.getElementById("cartContent");

            let row = document.createElement("TR");

            // nombre producto
            let col1 = document.createElement("TD");
            col1.innerHTML = `${producto.categoria}<br>${producto.codigoRaise}`;

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
                decrease()
            };
            plus.innerHTML = '+';
            plus.onclick = function () {
                increase()
            };

            counter.type = 'text';
            counter.id = producto.codigoRaise;
            counter.value = parseInt('1');
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
            };

            col3.appendChild(minus);
            col3.appendChild(counter);
            col3.appendChild(plus);

            // subtotal 
            let col4 = document.createElement("TD");
            let resume = producto.precio * 1;

            col4.class = 'resumeVal';
            col4.innerHTML = `$${resume}`;

            function getResume(e) {
                if (counter.value != 0) {
                    resume = producto.precio * counter.value;
                    col4.innerHTML = `$${resume}`;
                };
            };

            cart.map(producto => {
                resume = producto.precio * producto.cantidad;
            });
            col4.innerHTML = `$${resume}`;

            // total 
            let totalCart = document.getElementById('totalCart');

            let totalResume = resume;
            totalCart.innerHTML = `$${totalResume}`;

            function getTotal() {
                let resumeVal = [];
                let valResume = document.getElementsByClassName('resumeVal');
                resumeVal.push(valResume);
            };

            // botón para eliminar item del carrito
            let col5 = document.createElement("TD");
            col5.innerHTML = `<i class="fas fa-trash-alt"></i>`;
            col5.className = "delete-item";

            // evento eliminar
            col5.addEventListener("click", (e) => {
                cartContent.removeChild(row);
                cartNav.removeChild(alertCart);
                //filtro el array cart por los que sean distintos al que estoy removiendo
                cart = cart.filter(prod => prod.codigoRaise !== producto.codigoRaise);
                saveOnStorage();
            });

            // agrego todo a la tabla
            row.appendChild(col1);
            row.appendChild(col2);
            row.appendChild(col3);
            row.appendChild(col4);
            row.appendChild(col5);

            cartContent.appendChild(row);
            cartTable.appendChild(cartContent);
        };
        segundaParte();
    });
};

// funcion para guardar en storage
function saveOnStorage() {
    let storageItem = localStorage.setItem('cart', JSON.stringify(cart));
    return storageItem;
};

// funcion para agregar al carrito
function addCart(producto) {

    // icono plus carrito en el nav
    let cartNav = document.getElementById("cartNav");
    let alertCart = document.createElement("i");
    alertCart.className = "alert-cart";
    alertCart.innerHTML = `<i class="fas fa-plus-circle"></i>`;
    cartNav.appendChild(alertCart);

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
        function segundaParte() {
            // agrego los productos seleccionados al carrito
            cart.push({
                categoria: producto.categoria,
                codigoRaise: producto.codigoRaise,
                precio: producto.precio,
                cantidad: 1,
            });

            // creo la tabla para el carrito
            let cartTable = document.getElementById("cartTable");
            let cartContent = document.getElementById("cartContent");

            let row = document.createElement("TR");

            // nombre producto
            let col1 = document.createElement("TD");
            col1.innerHTML = `${producto.categoria}<br>${producto.codigoRaise}`;

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
                decrease()
            };
            plus.innerHTML = '+';
            plus.onclick = function () {
                increase()
            };

            counter.type = 'text';
            counter.id = producto.codigoRaise;
            counter.value = parseInt('1');
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
            };

            col3.appendChild(minus);
            col3.appendChild(counter);
            col3.appendChild(plus);

            // subtotal 
            let col4 = document.createElement("TD");
            let resume = producto.precio * 1;

            col4.class = 'resumeVal';
            col4.innerHTML = `$${resume}`;

            function getResume(e) {
                if (counter.value != 0) {
                    resume = producto.precio * counter.value;
                    col4.innerHTML = `$${resume}`;
                };
            };

            cart.map(producto => {
                resume = producto.precio * producto.cantidad;
                console.log(counter.value);
            });

            col4.innerHTML = `$${resume}`;
            
            // total 
            let totalCart = document.getElementById('totalCart');

            let totalResume = resume;
            totalCart.innerHTML = `$${totalResume}`;

            function getTotal() {
                let resumeVal = [];
                let valResume = document.getElementsByClassName('resumeVal');
                resumeVal.push(valResume);
            };

            // botón para eliminar item del carrito
            let col5 = document.createElement("TD");
            col5.innerHTML = `<i class="fas fa-trash-alt"></i>`;
            col5.className = "delete-item";

            // evento eliminar
            col5.addEventListener("click", (e) => {
                cartContent.removeChild(row);
                cartNav.removeChild(alertCart);
                //filtro el array cart por los que sean distintos al que estoy removiendo
                cart = cart.filter(prod => prod.codigoRaise !== producto.codigoRaise);
                saveOnStorage();
            });

            // agrego todo a la tabla
            row.appendChild(col1);
            row.appendChild(col2);
            row.appendChild(col3);
            row.appendChild(col4);
            row.appendChild(col5);

            cartContent.appendChild(row);
            cartTable.appendChild(cartContent);
        };
        return segundaParte();
    };
};