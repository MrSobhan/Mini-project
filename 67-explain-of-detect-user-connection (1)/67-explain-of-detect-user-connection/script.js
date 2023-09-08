const $ = document;
const toast = $.querySelector(".toast");
const wrapper = $.querySelector(".wrapper");
let i = 0;
let e = 0;

setInterval(() => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      online();
    })
    .catch((err) => {
      console.clear();
      offline();
    });
}, 500);


function offline() {
  e = 0;
  i++;
  if (i == 1) {
    wrapper.classList.remove("hide");
    toast.classList.add("offline");
    Close();
  }
}
function online() {
  i = 0;
  e++;
  if (e == 1) {
    wrapper.classList.remove("hide");
    toast.classList.remove("offline");
    Close();
  }
}

function Close() {
  setTimeout(() => {
    wrapper.classList.add("hide");
  }, 2000);
}


// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project