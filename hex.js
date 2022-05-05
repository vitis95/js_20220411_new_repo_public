// tutorial https://www.youtube.com/watch?v=3PHXvlpOkf4&t=421s
// min 27

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn2 = document.getElementById("btn2");
const color2 = document.querySelector(".color-2");
const box_colored2 = document.getElementById('box-colored-2');
const box_colored_text2 = document.getElementById('box-colored-text');
console.log(btn2);
console.log(color2, "color2");


btn2.addEventListener("click", function () {
  console.log("debtro");
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
        console.log(hexColor,"ciao");
    }
    color2.textContent = hexColor;
    box_colored2.style.backgroundColor = hexColor;
    // document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
