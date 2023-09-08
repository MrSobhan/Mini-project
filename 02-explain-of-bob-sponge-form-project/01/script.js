const $ = document;
const lefteyeElem = $.querySelector(".lefteye");
const righteyeElem = $.querySelector(".righteye");

const userInput = $.querySelector("#userInput");
const passInput = $.querySelector("#passInput");

userInput.addEventListener("focus", () => {
  // lefteyeElem
  lefteyeElem.style.top = "92px";
  lefteyeElem.style.left = "105px";

  // righteyeElem
  righteyeElem.style.top = "92px";
  righteyeElem.style.left = "167px";
});
userInput.addEventListener("keydown", (e) => {
  let i = 0;
  if (userInput.value.length < 14) {
    i = e.keyCode == 8 ? -1 : 1;
  }
  // lefteyeElem
  lefteyeElem.style.left =
    Number(lefteyeElem.style.left.slice(0, 3)) + i + "px";

  // righteyeElem
  righteyeElem.style.left =
    Number(righteyeElem.style.left.slice(0, 3)) + i + "px";
});
userInput.addEventListener("blur", () => {
  blurElem();
});


passInput.addEventListener("focus", () => {
  // lefteyeElem
  lefteyeElem.style.top = "52px";
  lefteyeElem.style.left = "120px";

  // righteyeElem
  righteyeElem.style.top = "52px";
  righteyeElem.style.left = "167px";
});
passInput.addEventListener("blur", () => {
  blurElem();
});

function blurElem() {
  // lefteyeElem
  lefteyeElem.style.top = "75px";
  lefteyeElem.style.left = "110px";

  // righteyeElem
  righteyeElem.style.top = "75px";
  righteyeElem.style.left = "174px";
}


// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project