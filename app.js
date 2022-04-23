// tutorial https://www.youtube.com/watch?v=3PHXvlpOkf4&t=421s 
// min 20:27


const colors = ["#2B2D42", "#8D99AE"];


const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const box_colored = document.getElementById('box-colored');


btn.addEventListener('click', function() { 
    
    // get random number between 0 and 3 - serve per pescare un coore a caso dall'array sopra. 
    const randomNumber = getRandomNumber();
    
    //document.body.style.backgroundColor = colors[randomNumber];
    if(color.textContent == colors[randomNumber]) {
        console.log("IF")
    const randomNumber = getRandomNumber();
    } else {
        console.log("ELSE")
        color.textContent = colors[randomNumber]; // cambia il nome del colore in pagina 
        box_colored.style.backgroundColor = colors[randomNumber];
    }
   
})



function getRandomNumber() {
    var prova = Math.floor(Math.random() * colors.length);
    return prova;
}


// $(document).ready(function() {
//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();
//         if (scroll > 250) {
//             $(".header-fixed").addClass("resized");
//         } else {
//             $(".header-fixed").removeClass("resized");
//         }
//     });
// });
