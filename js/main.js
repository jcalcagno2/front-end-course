
$(document).ready(function() {
    var el = document.getElementById('text');

    $(document).on('contextmenu', function() {
        return false; 
    });

    $(document).on('click', function(){

    });

    $(document).on('mousedown', function(event) {
        event.preventDefault();

        if(event.which == 3) {

            $('.hidden').removeClass('shown');

            if ($(event.target).is('img')) {
                $('.saveimg, .newtab').addClass('shown');
            } else if ($(event.target).is('a')) {
                $('.newtab').addClass('shown');
            }
            console.log(event.pageY, event.pageX)

            $('#context').css({
                top: event.pageY,
                left: event.pageX
            });

            $('#context').fadeIn();
            return false;
        }

        $('#context').fadeOut();
    });
    
   $('[data-trigger="dropdown"]').on('mouseenter', function() {

    var submenu = $(this).parent().find('.submenu');
    submenu.fadeIn(300);

    $('.profile-menu').on('mouseleave', function() {
        submenu.fadeOut(300);
        });
    });

    $('#prepend, #append, #replace').on('click', function(e) {
        
        var el = $(e.currentTarget);
        var action = el.attr('id');
        var content = $('.text').val();

        if (action == "prepend") {
            console.log("prepend");
            $('#main').prepend(content);

        } else if (action =="append") {
           console.log("append");
           $('#main').append(content);

        } else if(action =="replace") {
            console.log("replace");
            $('#main').html(content);

        }

        $('text').val('');

    });


});

