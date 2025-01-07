function buttonClicked() {
    console.log("Button Clicked");
    btn.removeEventListener("click", buttonClicked);
    document.getElementById("text").innerHTML = "Dont do it"
    console.log(document.getElementById("text").innerHTML);
}


var btn = document.getElementById("go-button");

btn.addEventListener("click", buttonClicked);
