// Garantiza que siempre se uestre el menu en pantallas grandes
$(window).resize(function() {
    if ($(window).width() > 768 && $(".nav-primary").css('display') == 'none') {
        $(".nav-primary").css('display', 'block')
    }
});

// Slide Down Mobile Menu
$(document).on('click', '.btn-mobile', function() {
    if ($(".nav-primary").css('display') == 'none') {
        $(".nav-primary").slideDown();
    } else {
        $(".nav-primary").slideUp();
    }
});

// Plugin para verificar visibilidad en la pantalla
(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */
  
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
})(jQuery);

//Deslizar a la derecha
$(window).scroll(function (event) {

    $(".animate").each(function (i, element) {
        if ($(element).visible(true)) {
            $(element).addClass("slide-right");
        }
    });

});