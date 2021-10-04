let ecomSection = document.getElementById("ecomSection");

//funcion para crear tarjetas en dom
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
    ${producto.tipoLlaves}<br>
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

    // evento para boton agregar
    btnElement.addEventListener("click", (e) => {
        e.preventDefault();
        addCart(producto);
        freshSubTotal(producto);
        freshTotal();
        saveOnStorage();
    });
};

function completeCard() {
    listaProductos.forEach(producto => {
        createCard(producto);
    });
};

completeCard();

// filtros

function filterProducts(array) {
    array.forEach(producto => {
        createCard(producto);
    });
};

let filterOpt = document.querySelectorAll('input[type="radio"]');

filterOpt.forEach(check => check.addEventListener("change", handleChange));

function handleChange(e) {
    e.preventDefault();
    
    ecomSection.innerHTML = "";

    const checkeds = Array.from(filterOpt).filter(radio => radio.checked);

    const checkedValue = checkeds.map(radio => radio.value);

    let filteredArray = "";
    
    if (checkedValue == "discos") {
        filteredArray = listaProductos.filter(item => item.categoria == "Disco");
    } else if (checkedValue == "cortadores") {
        filteredArray = listaProductos.filter(item => item.categoria == "Cortador");
    } else if (checkedValue == "guias") {
        filteredArray = listaProductos.filter(item => item.categoria == "Guía");
    } else {
        filteredArray = listaProductos
    };

    filterProducts(filteredArray);
};