const $ = document;
const container = $.querySelector(".wrapper");
const select_btn = $.querySelector(".select-btn");
const inputElem = $.querySelector(".search input");
const options = $.querySelector(".options");
let countries = [
  "Afghanistan",
  "Algeria",
  "Argentina",
  "Australia",
  "Bangladesh",
  "Belgium",
  "Bhutan",
  "Brazil",
  "Canada",
  "China",
  "Denmark",
  "Ethiopia",
  "Finland",
  "France",
  "Germany",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Italy",
  "Japan",
  "Malaysia",
  "Maldives",
  "Mexico",
  "Morocco",
  "Nepal",
  "Netherlands",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Peru",
  "Russia",
  "Romania",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United States",
  "United Kingdom",
  "Vietnam",
];

select_btn.addEventListener("click", () => {
  container.classList.toggle("active");
});

inputElem.addEventListener("keyup", () => {
  options.innerHTML = "";
  countries.forEach((e) => {
    if (e.includes(inputElem.value)) {
      options.insertAdjacentHTML("beforeend", `<li onclick="liElem(this)">${e}</li>`);
    }
  });
});


function liElem(li){
    if($.querySelector('.selected')){
        $.querySelector('.selected').classList.remove('selected')
    }
    $.querySelector('.select-btn span').innerHTML = li.innerHTML
    li.classList.add('selected')
    container.classList.remove("active");
}

function AddItem(){
    countries.forEach((e) => {
        options.insertAdjacentHTML("beforeend", `<li onclick="liElem(this)">${e}</li>`);
    });
}

AddItem()

// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project