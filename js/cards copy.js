let ecomSection = document.getElementById("ecomSection");

function createCard(producto) {
    let cardElement = document.createElement('div');
    let imageContainer = document.createElement('div');
    let infoContainer = document.createElement('div');
    let imageElement = document.createElement('img');
    let headingElement = document.createElement('h5');
    let paragraphElement = document.createElement('p');
    let spanElement = document.createElement('span');
    let btnElement = document.createElement('a');

    cardElement.className = "card";
    imageContainer.className = "image-container";
    infoContainer.className = "info-container";
    imageElement.className = "image";
    headingElement.className = "heading";
    paragraphElement.className = "paragraph";
    spanElement.className = "price";
    btnElement.className = "add-btn";

    btnElement.href = "#";
    imageElement.setAttribute('src', producto.img);

    headingElement.innerHTML = `${producto.codigoRaise}`;
    paragraphElement.innerHTML = `<b>${producto.categoria}</b><br>
    Ref.: ${producto.referencia}<br>
    Material: ${producto.material}<br>
    Para máquinas: ${producto.modeloMaquina}<br>
    <br><hr>`;
    spanElement.innerHTML = `<br>$ ${producto.precio}<br>`;
    btnElement.innerHTML = "Agregar al carrito";

    ecomSection.appendChild(cardElement);
    cardElement.append(imageContainer, infoContainer);
    imageContainer.appendChild(imageElement);
    infoContainer.append(headingElement, paragraphElement, spanElement, btnElement);

    //funcion para guardar en storage
    function saveOnStorage() {
        let storageItem = JSON.stringify(localStorage.setItem(producto.codigoRaise, `$${producto.precio}`));
        return storageItem;
    };

    //evento para boton agregar
    btnElement.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(`Elegiste el cortador: ${producto.codigoRaise}`);
        addCart(producto);
        saveOnStorage();
    });
}

function completeCard() {
    listaProductos.forEach(producto => {
        createCard(producto);
    });
};

completeCard();

function filterProducts(array) {
    array.forEach(producto => {
        createCard(producto);
    });
};

//funcion para agregar al carrito
function addCart(producto) {
    let cartNav = document.getElementById("cartNav");
    let alertCart = document.createElement("i");
    alertCart.className = "alert-cart";
    alertCart.innerHTML = `<i class="fas fa-plus-circle"></i>`;
    cartNav.appendChild(alertCart);

    let cartList = document.getElementById("cartList");
    let productoP = document.createElement("p");
    productoP.innerHTML = `Producto: ${producto.codigoRaise} <b><i>$${producto.precio}</i></b>`;
    cartList.appendChild(productoP);

    let deleteItem = document.createElement("i");
    deleteItem.className = "delete-item";
    deleteItem.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    productoP.appendChild(deleteItem);

    //evento eliminar
    deleteItem.addEventListener("click", (e) => {
        cartList.removeChild(productoP);
        cartNav.removeChild(alertCart);
    });
};

//funcion para aplicar filtros

let filterOpt = document.querySelectorAll('input[type="checkbox"]');

filterOpt.forEach(check => check.addEventListener("change", handleChange));

function handleChange(e) {
    ecomSection.innerHTML = "";

    const checkeds = Array.from(filterOpt).filter(checkbox => checkbox.checked);

    const checkedValue = checkeds.map(checkbox => checkbox.value);

    let filteredArray = "";

    if (checkedValue == "disco") {
        filteredArray = listaProductos.filter(item => item.categoria == "Disco");
    } else if (checkedValue == "cortador-punto") {
        filteredArray = listaProductos.filter(item => item.categoria == "Cortador (Llaves de Punto)");
    } else if (checkedValue == "cortador-regata") {
        filteredArray = listaProductos.filter(item => item.categoria == "Cortador (Llaves de Regata)");
    } else if (checkedValue == "guia-punto") {
        filteredArray = listaProductos.filter(item => item.categoria == "Guía para Cortador (Punto)");
    } else if (checkedValue == "guia-regata") {
        filteredArray = listaProductos.filter(item => item.categoria == "Guía para Cortador (Regata)");
    } else {
        filteredArray = listaProductos;
    };

    filterProducts(filteredArray);

    e.preventDefault();
};