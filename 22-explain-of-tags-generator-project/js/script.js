const $ = document;
tags = [];
const inputElem = $.querySelector("input");
const ulElem = $.querySelector(".content ul");
const numSpan = $.querySelector(".details p span");
const btnDelete = $.querySelector(".details button");
window.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    if (inputElem.value && tags.length < 10) {
      let note = inputElem.value;
      AddItem(note);
    }
  }
});

btnDelete.addEventListener('click' , ()=>{
    tags = []
    ulElem.innerHTML  =  '<input type="text" spellcheck="false">'
    numSpan.innerHTML = 10 - tags.length;
})

function AddItem(note) {
  tags.push(note);
  ulElem.insertAdjacentHTML(
    "afterbegin",
    `
          <li>
              <p>${note}</p>
              <i class="uit uit-multiply"  onclick="deleteItem(this)"></i>
            </li>
          `
  );
  inputElem.value = "";
  numSpan.innerHTML = 10 - tags.length;
}

function deleteItem(li) {
  li.parentElement.remove();
  let text = li.parentElement.children[0].innerHTML;
  tags.splice(
    tags.findIndex((txt) => txt == text),
    1
  );
  numSpan.innerHTML = 10 - tags.length;
  console.log(tags);
}


// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project