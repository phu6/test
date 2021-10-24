//menu box
var myModal1 = document.getElementById("myModal1");
var menu = document.getElementById("menu");
var span1 = document.getElementsByClassName("close")[1];
menu.addEventListener("click", function() {
    myModal1.style.display = "block";
});
span1.onclick = function() {
    myModal1.style.display = "none";
}
  
window.onclick = function(event) {
    if (event.target == myModal1) {
        myModal1.style.display = "none";
    }
}