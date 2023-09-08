const $ = document

let surface = $.querySelector('.surface')
let car = $.querySelector('.car')
let carImg = $.querySelector('.car img')
let i = 5

window.addEventListener('keydown' , (e)=>{
    console.log(e);
    if(e.keyCode == 13){
        surface.classList.toggle('moveRight')
        car.classList.toggle('suspension')
    }else if(e.keyCode == 32){
        carImg.src = `images/Img_0${i}.png`
        i = (i==5) ? 6 : 5
    }
})

// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project