$(function () {

    $('#search').on("click", () => $('.search-input').slideToggle('easeInOut'));

    $('.btn-one').click(() => window.location.href = './pages/productos.html');

    $('.btn-two').click(() => window.location.href = './pages/contacto.html');

    $('.card-home').hide().delay(1500).fadeIn(2000);

    $(".top-btn").click( () => {
        $('html, body').animate({
            scrollTop: $("body").offset().top  
        }, 1000);
    });

})