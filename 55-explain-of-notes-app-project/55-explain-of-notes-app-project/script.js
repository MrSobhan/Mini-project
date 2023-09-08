const $ = document;

const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

// const days = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"]    

const popup_box = $.querySelector(".popup-box");
const icon_x = $.querySelector("header i");
const p_Top_box = $.querySelector("header p");
const btn_box = $.querySelector(".btn_box");
const input_box = $.querySelector(".input_box");
const textarea_box = $.querySelector(".textarea_box");
const wrapper = $.querySelector(".wrapper");

let isUpdate = false;
let arry_note = [];
let idEdit = null;

if (localStorage.getItem("notes")) {
  arry_note = JSON.parse(localStorage.getItem("notes"));
  // console.log(JSON.parse(localStorage.getItem('notes')));
}

function add_box() {
  popup_box.classList.add("show");
  if (!isUpdate) {
    p_Top_box.innerHTML = "Add Note";
    btn_box.innerHTML = "Add Note";
    ClearValue()
  } else {
    p_Top_box.innerHTML = "Edit Note";
    btn_box.innerHTML = "Edit Note";
    if (idEdit) {
      arry_note.forEach((li) => {
        if (li.id == idEdit) {
          input_box.value = li.title
          textarea_box.value = li.dis
        }
      });
    }
  }
}

btn_box.addEventListener("click", () => {
  // * Date
  let Alldate = new Date()
  let full_date = months[Alldate.getMonth()] + " " + Alldate.getDate() + ", " + Alldate.getFullYear()
  // * Date
  if (!isUpdate) {
    let randomId = Math.floor(Math.random() * 100000);
    let obj = {
      id: randomId,
      title: input_box.value,
      dis: textarea_box.value,
      data: full_date
    };
    arry_note.push(obj);
  } else {
    if (idEdit) {
      arry_note.forEach((li) => {
        if (li.id == idEdit) {
          li.title = input_box.value;
          li.dis = textarea_box.value;
          li.data = full_date
        }
      });
    } else {
      alert("Not Found :((");
    }
  }

  localStorage.setItem("notes", JSON.stringify(arry_note));
  popup_box.classList.remove("show");
  AddNoteDom();
  ClearValue();
});

function AddNoteDom() {
  if (arry_note) {
    wrapper.innerHTML = `<li class="add-box" onclick="add_box()">
    <div class="icon"><i class="uil uil-plus"></i></div>
    <p>Add New Note</p>
  </li>`;
    arry_note.forEach((li) => {
      wrapper.insertAdjacentHTML(
        "beforeend",
        `<li class="note">
        <div class="details">
          <p>${li.title}</p>
          <span>${li.dis}</span>
        </div>
        <div class="bottom-content">
          <span>${li.data}</span>
          <div class="settings">
            <i class="uil uil-ellipsis-h" onclick="menuToggle(this)"></i>
            <ul class="menu" >
              <li onclick="editNote(${li.id})">
                <i class="uil uil-pen"></i>Edit
              </li>
              <li onclick="deleteNote(${li.id})">
                <i class="uil uil-trash"></i>Delete
              </li>
            </ul>
          </div>
        </div>
      </li>`
      );
    });
  }
}


icon_x.addEventListener("click", () => {
  popup_box.classList.remove("show");
});

function deleteNote(id) {
  arry_note.splice(
    arry_note.findIndex((li) => li.id == id),
    1
  );
  localStorage.setItem("notes", JSON.stringify(arry_note));
  AddNoteDom();
}

function editNote(id) {
  idEdit = id;
  isUpdate = !isUpdate;
  $.querySelector(".bottom-content .show").classList.remove("show");
  add_box();
}

function menuToggle(e) {
  e.parentElement.classList.add("show");
}

function ClearValue(){
  input_box.value = "";
  textarea_box.value = "";
}

AddNoteDom(); //Start Pages


// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project