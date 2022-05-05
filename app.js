// tutorial https://www.youtube.com/watch?v=3PHXvlpOkf4&t=421s
// min 20:27

// Start // Es JS Color Flipper Simple
const colors = ["#2B2D42", "#8D99AE", "#EDF2F4", "#EF233C", "#D90429"];
const btn = document.getElementById('btn');
console.log(btn, "btn");
const color = document.querySelector('.color');
const box_colored = document.getElementById('box-colored');
const box_colored_text = document.getElementById('box-colored-text');

btn.addEventListener("click", function () {
    // get random number between 0 and 3 - serve per pescare un coore a caso dall'array sopra.
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);
    //document.body.style.backgroundColor = colors[randomNumber];
    if (colors[randomNumber] == "#EDF2F4"){
        console.log("CIAO");
        box_colored_text.style.color = "#1e1e1e";
    } else {
        box_colored_text.style.color = "#edf2f4";
    }
    color.textContent = colors[randomNumber];
    box_colored.style.backgroundColor = colors[randomNumber];
  });

function getRandomNumber() {
    var prova = Math.floor(Math.random() * colors.length);
    return prova;
}
// End // Es JS Color Flipper Simple


// Start // Action Scroll Page, add class header-fixex-scroll
$('document').ready(function(){
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $("#header-scroll").addClass("header-fixed-scroll");
    } else {
        $("#header-scroll").removeClass("header-fixed-scroll");
    }
});
});
// End // Action Scroll Page, add class header-fixex-scroll


// Start // Hamburger Menu
$(document).ready(function(){
    $(".nav-icon-bar").click(function(e){
        $(".nav-links").toggleClass('show-nav-mobile');
        e.preventDefault();
    });
});
// End // Hamburger Menu
