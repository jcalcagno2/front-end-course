
$(document).ready(function() {
    var el = document.getElementById('text');

    console.log($('.submenu a').first('a').text());
    console.log($('.submenu a').last('a').text());

   // gQuery(".my-selector").addClass("MYNEWCLASS");
   // gQuery("#main").addClass("HELLO");
    
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

    $('textarea').focusin(function(){
        console.log("Focused in on the textarea");

    });

    $('textarea').focusout(function(){
        console.log("Text area has lost focus")
    });

    $('input').focusout(function(){
        if($(this).val().indexOf('@') > -1 && $(this).val().indexOf('.') > -1) {
            $('.status').html("Valid Email");
        }else {
            $('.status').html("Your email is invalid. Please try again")
        }
    });

});

