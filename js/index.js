$(function () {

    $('.btn-one').click(() => window.location.href = './pages/productos.html');

    $('.btn-two').click(() => window.location.href = 'https://wa.me/+5215566586646');

    $('#search').on("click", () => $('.search-input').slideToggle('easeInOut'));

    /* $('.mode-btn').click(function() {
        $("html, body").animate({ backgroundColor: "white", color: "darkgrey" }, "slow");
    }); */

    $(".top-btn").click( () => {
        $('html, body').animate({
            scrollTop: $("body").offset().top  
        }, 1000);
    });

})