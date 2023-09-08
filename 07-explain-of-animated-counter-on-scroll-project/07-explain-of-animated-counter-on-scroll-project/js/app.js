const $ = document;
const con = $.querySelector(".benefits");
const num = $.querySelectorAll(".num");

let tempScroll= 0

window.addEventListener("scroll", () => {
  if (window.scrollY >= con.offsetTop && tempScroll ==0) {
    let number = 0;
    num.forEach((e) => {
      number = Number(e.getAttribute("data-num"));

      numbers(e, number);
    });
    tempScroll++
  }
});

function numbers(e, number) {
  let i = 0;
  setInterval(() => {
    if (i <= number) {
      e.innerHTML = i;
      i++;
    }
  }, 10);
}

// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project