class Cart{

    //Añadir el producto al carrito
    buyProduct(e){
        e.preventDefault();
        if(e.target.classList.contains('add-btn')){
            const producto = e.target.parentNode.children[0].innerText;
            this.readProductInfo(producto);
            /* console.log(producto); */
        }
    }

    readProductInfo(producto){
        const infoProducto = {
            imagen : producto.querySelector('img').src,
            titulo : producto.querySelector('h5').textContent,
            precio : producto.querySelector('.price span').textContent,
            /* id : producto.querySelector('a').getAttribute('data-id'), */
            cantidad : 1
        }
        this.insertCart(infoProducto);
    }

    insertCart(producto){
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${producto.imagen}" width=100>
        </td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="#" class="delete-producto fas fa-times-circle"></a>
        </td>`;

        cartList.appendChild(row);

        console.log(row);
    }
}

