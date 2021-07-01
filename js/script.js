function myFunction(body) {
    var element = document.body;
    var button = document.getElementById("button");
    element.classList.toggle("dark-mode");

    if(element.classList.contains("dark-mode")){
        let msg = "Mode clair";
        button.innerHTML = msg;
    }else{
        let msg = "Mode sombre";
        button.innerHTML = msg;
    }
}

var modal = document.getElementById("modal");
var button = document.getElementById("btn");
var close = document.getElementsByClassName("fermer")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}