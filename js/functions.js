// Garantiza que siempre se uestre el menu en pantallas grandes
$(window).resize(function() {
    if ($(window).width() > 768 && $(".nav-primary").css('display') == 'none') {
        $(".nav-primary").css('display', 'block')
    }
})

// Slide Down Mobile Menu
$(document).on('click', '.btn-mobile', function() {
    if ($(".nav-primary").css('display') == 'none') {
        $(".nav-primary").slideDown();
    } else {
        $(".nav-primary").slideUp();
    }
})