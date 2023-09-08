const $ = document

const btnSubmit = $.querySelector('.form button')
const inputElem = $.querySelector('.form input')
const qrImg = $.querySelector('.qr-code img')
const wrapper = $.querySelector('.wrapper')

btnSubmit.addEventListener('click' , ()=>{
    if(inputElem.value){
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputElem}`
    }
})

qrImg.addEventListener('load' , ()=>{
    wrapper.classList.add('active')
})

// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project