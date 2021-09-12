$(function () {

    $('#search').on("click", () => $('.search-input').slideToggle('easeInOut'));

    $('.btn-one').click(() => window.location.href = './pages/productos.html');

    $('.btn-two').click(() => window.location.href = './pages/contacto.html');

    $('.card-home').hide().delay(1500).fadeIn(2000);

    $(".top-btn").click(() => {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 1000);
    });

    //Animaciones concatenadas
    $('.img-hero').css('position', 'relative').css('left', '-600px').animate({
        left: '0px',
    }, 1500)

    //Ajax y apis
    //Declaramos la url que vamos a usar para el GET
    const URLGET = "https://jsonplaceholder.typicode.com/posts"
    //Escuchamos el evento click del botón agregado
    $("#testimonialBtn").click(() => {
        console.log("entro al evento click");
        $.get(URLGET, function (respuesta, estado) {
            console.log(estado);
            console.log(respuesta);
            if (estado === "success") {
                let misDatos = respuesta;
                for (let i = 0; i < 3; i++) {
                    $("#testimonials").append(`
                        <div class="container card">
                            <figure><img src='./img/${i}.jpg'></figure>
                            <div class="card-body">
                                <h6 class="card-id"> ${misDatos[i].id}</h6>
                                <h5 class="card-title">${misDatos[i].title}</h5>
                                <p class="card-text">"${misDatos[i].body}"</p>
                            </div>
                        </div>`);
                }
            }
        });
        $("#testimonialBtn").remove();
    });

});