//all products
const data =[
    {
        'ID': "1",
        'type':"Women's Shoe",
        'shoeName':"NIKE AIR JORDAN 1 MID GS",
        'info':"The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel",
        'price':"$160",
        'picture1': "./pictures/Jordan-1-Mid-GS-Pink-Quartz.png",
        'size':"",
        'picture2': "./pictures/reverse-180-pinkquartz.png",
        'picture3': "./pictures/fornviewdouble.png",
        'picture4': "./pictures/backviewdouble.png",
    },
];
let grid = document.getElementById('grid')
let icon = document.getElementById('icon')

for(let i of data){
    let html =``
    icon.insertAdjacentHTML('beforeend',html )
}
// searchBar 
var myModal2 = document.getElementById("myModal2");

var search = document.getElementById("search");

var span = document.getElementsByClassName("close")[0];

search.addEventListener("click", function() {
    myModal2.style.display = "block";
});


span.onclick = function() {
    myModal2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == myModal2) {
        myModal2.style.display = "none";
    }
}
function displaySearchBar() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "block";
      } else {
        li[i].style.display = "none";
      }
      
    }
}
// menu button
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

