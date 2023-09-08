const $ = document

const container = $.querySelector('.container')
const img = $.querySelector('.container img')

container.addEventListener('mousemove' , (e)=>{
    img.style.cssText = `transform: scale(2) ; transform-origin: ${e.clientX - container.offsetLeft}px ${e.clientY - container.offsetTop}px;`
    // console.log(e.clientX , img.offsetLeft  , e.clientY , img.offsetTop);
    // console.log(e);
})
container.addEventListener('mouseleave' , (e)=>{
    img.style.cssText = "transform: scale(1) ; transform-origin: center;"
})

// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project