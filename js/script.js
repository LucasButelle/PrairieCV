function myFunction(body) {
    var element = document.body;
    element.classList.toggle("dark-mode");
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