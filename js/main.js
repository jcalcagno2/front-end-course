
$(document).ready(function() {
    var el = document.getElementById('text');

   $('[data-trigger="dropdown"]').on('mouseenter', function() {

    var submenu = $(this).parent().find('.submenu');
    submenu.fadeIn(300);

    $('.profile-menu').on('mouseleave', function() {
        submenu.fadeOut(300);
    })

   
    });
});

