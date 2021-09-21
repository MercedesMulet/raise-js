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
    counter.id = 'productQty';
    counter.value = parseInt('1');
    counter.min = parseInt('1');
    counter.max = parseInt('5');
    counter.name = 'productQty';
    counter.disabled = true;

    function decrease() {
        if (counter.value == 1) {
            return
        } else {
            counter.value--;
            getResume();
        }
    };

    function increase() {
        if (counter.value == 5) {
            return
        } else {
            counter.value++;
            getResume();
        }
    };

    col3.appendChild(minus);
    col3.appendChild(counter);
    col3.appendChild(plus);

    // subtotal 
    let col4 = document.createElement("TD");
    let resume = producto.precio * 1;
    col4.innerHTML = `$${resume}`;

    function getResume(e) {
        resume = producto.precio * counter.value;
        col4.innerHTML = `$${resume}`;
    };

    // total SALE MAL

    let totalCart = localStorage.getItem(`$${producto.precio}`);

    let totalRow = document.createElement('TR');

    let totalCell = document.createElement('TD');
    let txtTotalCell = document.createTextNode('Total:');
    totalCell.appendChild(txtTotalCell);
    totalRow.appendChild(totalCell);

    let totalValueCell = document.createElement('TD');
    let txtTotalValueCell = document.createTextNode(`$${totalCart}`);
    totalValueCell.appendChild(txtTotalValueCell);
    totalRow.appendChild(totalValueCell);

/*     function getTotal() {
        let totalResume = `$${resume}`;

        let resumeCell = document.querySelectorAll('td + td + td + td');//aca me pierdo

        for(let i=0; i<resumeCell; ++i){
            totalResume += resumeCell[i].firstChild.data;
        }

        let totalRow = document.createElement('tr');

        let totalCell = document.createElement('td');
        let txtTotalCell = document.createTextNode('Total:');
        totalCell.appendChild(txtTotalCell);
        totalRow.appendChild(totalCell);

        let totalValueCell = document.createElement('td');
        let txtTotalValueCell = document.createTextNode(totalResume);
        totalValueCell.appendChild(txtTotalValueCell);
        totalRow.appendChild(totalValueCell);
    }; */
    
    /* let totalCart = document.getElementById('totalCart');
    let totalResume = resume[0] + resume[1] + resume[2] + resume[3] + resume[4];
    totalCart.innerHTML = `$${totalResume}`;
    console.log(parseInt(totalResume)); */

    /*     function totalCart() {
            let totalCart = document.getElementById('totalCart');
            totalCart.innerHTML = `$${totalResume}`;
            let totalResume = resume + resume;
        }; */

    // botón para eliminar item del carrito
    let col5 = document.createElement("i");
    col5.className = "delete-item";
    col5.innerHTML = `<i class="fas fa-trash-alt"></i>`;

    // evento eliminar
    col5.addEventListener("click", (e) => {
        cartContent.removeChild(row);
        cartNav.removeChild(alertCart);
        // SALE MAL
        localStorage.removeItem('cart');
    });

    // agrego todo a la tabla
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);

    cartContent.append(row, totalRow);
    cartTable.appendChild(cartContent);

    };