// tutorial https://www.youtube.com/watch?v=3PHXvlpOkf4&t=421s 
// min 27

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

console.log(btn);
console.log(color);


btn.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[0]
        console.log(hexColor); 
    }
    color.textContent = hexColor;
    ox_colored.style.backgroundColor = hexColor;
    // document.body.style.backgroundColor = hexColor;
});