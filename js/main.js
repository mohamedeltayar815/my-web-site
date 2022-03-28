$('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');
    
    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter:selector
    });
    return  false;
});
$(document).ready(function() {
var popup_btn = $('.popup-btn');
popup_btn.magnificPopup({
type : 'image',
gallery : {
    enabled : true
}
});
});



let mopileNavMenu = document.querySelector("header svg");
let navMenu = document.querySelectorAll("nav a");


mopileNavMenu.addEventListener("click", navdisplay);
function navdisplay(){
    console.log(navMenu);
    navMenu.forEach((a)=>{
        a.classList.toggle("active")
    })
}