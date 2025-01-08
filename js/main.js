
var btn = document.getElementById("go-button");

function buttonClicked() {
    console.log("Button Clicked");

    var customText= document.getElementsByClassName("my-input");
    var results = document.getElementById("text");
    var textArea = document.getElementsByClassName("my-textarea");

    
    results.innerHTML = "Hello" + customText[0].value + "<br />";



    results.innerHTML += "Message: " + textArea[0].value;

}


btn.addEventListener("click", buttonClicked);



