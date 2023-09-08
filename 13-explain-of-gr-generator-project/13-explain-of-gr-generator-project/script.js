const $ = document;
const code = $.querySelector("#code");
const btns = $.querySelectorAll(".buttons button");
const submit = $.querySelector("#submit");
const copy = $.querySelector('#copy')
let textColor = null

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
      $.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
    }
  });
});

submit.addEventListener("click", () => {
  let color_a = $.querySelector("#color-a").value;
  let color_b = $.querySelector("#color-b").value;
  let btnr = $.querySelector(".active").dataset.ro;
  textColor = `linear-gradient(${btnr} , ${color_a} , ${color_b})`;
  $.body.style.backgroundImage = textColor;
  code.innerHTML = textColor;
});

copy.addEventListener('click' , ()=>{
    navigator.clipboard.writeText(textColor)
    alert('Copyed Your Color :))')
})


// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project