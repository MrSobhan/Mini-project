const $ = document
const navItem =  $.querySelectorAll('nav a')
const start =  $.querySelector('.start')

navItem.forEach(a =>{
    a.addEventListener('mouseenter' , (e)=>{
        start.style.left = e.target.offsetLeft + 'px'
        start.style.width = e.target.offsetWidth + 'px'
    })
})

// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project