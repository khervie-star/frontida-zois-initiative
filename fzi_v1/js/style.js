
$(document).ready(function(){
$(window).scroll(function(){
 if ($(this).scrollTop() > 100) {
     $('#scroll').fadeIn();
 } else {
     $('#scroll').fadeOut();
 }
});
$('#scroll').click(function(){
 $("html, body").animate({ scrollTop: 0 }, 600);
 return false;
});
});

$(window).on('load', function() {
'use strict';
$('#loading').addClass('hidden');
});

$('.navbar-toggler').on('click', function(e) {
$(this).toggleClass('menu-is-expanded');
});

$(document).on('click', '.navbar-collapse.show', function(e) {
if ($(e.target).is('a')) {
$(this).collapse('hide');
$('.navbar-toggler').toggleClass('menu-is-expanded');
// $('.Menu-Icon--Circle').css('transform', 'translateX(-50%) translateY(-50%) scale(1)');
}
});


// var navBar = $('.custom-menu'),
//     navbarLinks = $('.custom-menu .nav-link');

// $(navbarLinks).on('click', function(event) {
//     var $anchor = $(this);
//     $('html, body').stop().animate({
//       scrollTop: ($($anchor.attr('href')).offset().top - 50)
//     }, 1250, 'easeInOutExpo');
//     event.preventDefault();
//   });


console.log(window.pageYOffset);

/*******NAV***********/
function openNav() {
document.getElementById("mySidenav").style.display = "block"; document.getElementById("mySidenav").style.width = "250px";
setInterval(openNav(), 5000);

document.getElementById("main").style.marginLeft = "250px";
}


function closeNav() {
document.getElementById("mySidenav").style.display = "none";
}
/*******NAV***********/


/* const nava= document.getElementsByClassName('NAV');
window.addEventListener(scroll, function(){

console.log(window.pageYOffset);

if(window.pageYOffset > 50){
nava.classList.append("t_icon_scrolled");
}});*/
const nava= document.getElementById('Nav');
window.onscroll=function() {ChangeClass()};

function ChangeClass(){
   console.log(window.pageYOffset)
   if (window.pageYOffset >=60){ nava.classList.add("nav_scrolled"); nava.classList.add("shadow");
       
   }
   else if(window.pageYOffset< 60){
       nava.classList.remove("nav_scrolled"); nava.classList.remove("shadow");
   }
   
   setInterval(2000);
};


$(window).on('load', function() {
    'use strict';
    $('#loading').addClass('hidden');
  });


