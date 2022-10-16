// const menu = document.querySelector('#mobile-menu');
// const menuLinks = document.querySelector('.navbar__menu');

// menu.addEventListener('click', function(){
//     menu.classList.toggle('is-active');
//     menuLinks.classList.toggle('active');
// });
// stop scolling
// function noscroll(){
//     window.scrollTo(0,0);
// }

pop_btn = document.querySelector(".button");
var scroll = new SmoothScroll('a[href*="#"]', {
 speed: 2000,
 speedAsDuration: true
});

function togglepopup(){

pop_btn.classList.add("popup");
this.innerHTML = ""
document.getElementById("popup-1").classList.toggle("active");
}
function togglepopup2(){
document.getElementById("popup-2").classList.toggle("active");
}
function togglepopup3(){
document.getElementById("popup-3").classList.toggle("active");
}


//window.addEventListener("scroll", noscroll);

// var menuBtn = document.getElementById("menuBtn")
// var sideNav = document.getElementById("sideNav")
// var menuu = document.getElementById("menu")

// sideNav.style.right = "-250px"

// menuBtn.onclick = function(){
//  if(sideNav.style.right == "-250px"){
//      sideNav.style.right = "0";
//      menu.src = "images/close.jpg"
//  }else{
//      sideNav.style.right = "-250px";
//      menu.src = "images/IMG_0925.jpg"
//  }
// }