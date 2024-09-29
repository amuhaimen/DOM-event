//option 1: directly set on the HTML elements  (go to index.html page, use this rule very often.)

{
  /* <button onclick="document.body.style.backgroundColor='blue'">Click me to make blue </button> */
}

//option-2: add onclick function on the html element
{
  /* <button onclick="makeGreen()">MouseWheel me to make green</button> */
}
function makeGreen() {
  document.body.style.backgroundColor = "green";
}

// option-3(i);
const makeRedButton = document.getElementById("make_red");
makeRedButton.onclick = makeRed;

function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option-3(ii);
const makePurpleButton = document.getElementById("make_purple");
makePurpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// =========================================================

const alertButton = document.getElementById("alert_btn");
alertButton.ondblclick = function alertAction() {
  alert("Don't go forward");
};

//==============================================================
//option-4(i)
const makePinkButton = document.getElementById("make_pink");
makePinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}
//option-4(ii)
const makeGoldenRod = document.getElementById("make_goldenrod");
makeGoldenRod.addEventListener("click", function () {
  document.body.style.backgroundColor = "goldenrod";
});
//option-4(iii) final and most uses

document
  .getElementById("make_steelblue")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "steelblue";
  });
