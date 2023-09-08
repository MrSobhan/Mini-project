const $ = document;
const menus = $.querySelectorAll(".menu a");
const btn = $.querySelector("#toggle-btn");
let bool = false;
const url = "http://127.0.0.1:5500/index.html";

btn.addEventListener("click", () => {
  bool = !bool;

  if (bool) {
    btn.classList.add("active");
    menus.forEach((a) => {
      if (a.href == url + "#account") {
        a.style.transform = "translate(150px , 0)";
      } else if (a.href == url + "#info") {
        a.style.transform = "translate(150px , 90px)";
      } else if (a.href == url + "#message") {
        a.style.transform = "translate(90px , 150px)";
      } else if (a.href == url + "#contact") {
        a.style.transform = "translate(0 , 150px)";
      }
    });
  } else {
    btn.classList.remove("active");
    menus.forEach((a) => {
      a.style.transform = "translate(0 , 0)";
    });
  }
});

// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project