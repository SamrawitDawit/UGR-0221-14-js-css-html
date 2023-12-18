var dropdowns = document.querySelectorAll('.dropDown');

dropdowns.forEach(function(dropdown) {
var icon = dropdown.querySelector('.drop-down');
var content = dropdown.querySelector('#project__description');

icon.addEventListener('click', function() {
content.classList.toggle('show');
});
});

var menuIcon = document.querySelector(".menu__icon");
menuIcon.addEventListener("click", function(){
var myMenu = document.querySelector(".menuList--vertical");
if (myMenu.style.display === "block") {
    myMenu.style.display = "none";
} else {
    myMenu.style.display = "block";
}
})

// JavaScript (script.js)
document.querySelector('#contact-form').addEventListener('submit', function (event) {

    event.preventDefault(); 
    console.log('submitted')
    document.getElementById('confirmation-popup').style.display = 'block'; 
    setTimeout(function () {
        document.getElementById('confirmation-popup').style.display = 'none'; 
    }, 2000); 
    document.getElementById('contact-form').reset();
});