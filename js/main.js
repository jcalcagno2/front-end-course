function alertMe() {
    alert("hi");
}

$(document).ready(function() {

   

    var el = document.getElementById

    console.log("El in Vanilla JS", el);

    console.log("El in jQuery:", $(el));

    document.getElementById('go-button').addEventListener('click', alertMe);

    $('#go-button').on('mouseup',function(){
        console.log("Fantastic button click");
    });

});