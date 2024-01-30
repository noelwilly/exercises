function randomTal(max) {
  return Math.floor(Math.random() * max);
}

function checkNum(n) {
  if (n === finNum) {
    return "TILLYKKE! " + n + " ER KORREKT!";
  } else if (n < finNum) {
    return "DET ER HØJERE END " + n;
  } else if (n > finNum) {
    return "DET ER LAVERE END " + n;
  }
}

const finNum = randomTal(100);
const enterNum = document.getElementById("input");
const number = document.querySelector(".ranNum");

function parse() {
  let guess = parseInt(document.querySelector("#input").value);
  console.log(guess);
  console.log(checkNum(guess));
  number.textContent = checkNum(guess);
}

enterNum.addEventListener("keyup", function () {
  if (event.keyCode === 13) {
    parse();
  }
});
