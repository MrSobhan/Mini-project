const $ = document;
const divElem = $.querySelectorAll(".wrapper");
divElem.forEach((div) => {
  div.addEventListener("click", (e) => {
    if (e.target.className == "toggle") {
      let active = $.querySelector(".container .active");
      if (active) {
        $.querySelector(".active .toggle i").className = "fas fa-plus icon";
        active.classList.remove("active");
      }
      e.target.parentElement.classList.add("active");
      e.target.children[1].className = "fas fa-minus icon";
    }
  });
});

// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project