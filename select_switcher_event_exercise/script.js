document.querySelector("select").addEventListener("change", selectChange);
let currentCol = "orange";

function selectChange(evt) {
  currentCol = evt.target.value;
  console.log("change", evt.target.value);
  document.querySelector("body").addEventListener("animationend", animationEnd);
  document.querySelector("body").classList.add("ani");
  document.querySelector("body").style.setProperty("--bgcolor", evt.target.value);
}

function animationEnd() {
  document.querySelector("body").classList.remove("ani");
  document.querySelector("body").style.backgroundColor = currentCol;
}
