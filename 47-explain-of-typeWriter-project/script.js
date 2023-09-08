const $ = document;
const pElem = $.querySelector("#text");
const Mytext = "Hello World :))";

let index = 0;
setInterval(() => {
  if (index < Mytext.length) {
    pElem.innerHTML += Mytext[index];
    index++;
  }else{
    pElem.innerHTML = ''
    index = 0
  }
}, 250);


// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project