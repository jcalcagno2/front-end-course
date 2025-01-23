$(document).ready(function() {

    function printThis(el) {
        if ($(this).text()) {
            console.log($(this).val());
        } else {
            console.log($(this).val());
        }
    }

    var el = document.getElementById('text');

    console.log($('.submenu a').first('a').text());
    console.log($('.submenu a').last('a').text());
    
   $('[data-trigger="dropdown"]').on('mouseenter', function() {

    var submenu = $(this).parent().find('.submenu');
    submenu.fadeIn(300);

    $('.profile-menu').on('mouseleave', function() {
        submenu.fadeOut(300);

        });
    });

    $('input').focusin(printThis);

    $('input').css({
        background: '#f00',
        padding: '10px',
        borderColor: '#000',
        backgroundSize: 'cover'
        
    });

});