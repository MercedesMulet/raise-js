$(function () {

    $('#search').on("click", () => $('.search-input').slideToggle('easeInOut'));

    $('.btn-one').click(() => window.location.href = './pages/productos.html');

    $('.btn-two').click(() => window.location.href = 'https://wa.me/+5215566586646');

    $('.card-home').hide().delay(1000).fadeIn(1000);

    $(".top-btn").click( () => {
        $('html, body').animate({
            scrollTop: $("body").offset().top  
        }, 1000);
    });


})