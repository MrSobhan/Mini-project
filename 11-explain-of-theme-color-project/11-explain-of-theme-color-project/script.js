const $  =document

const btns = $.querySelectorAll('.btn')

btns.forEach(btn =>{
    btn.addEventListener('click' , (e)=>{
        $.documentElement.style.setProperty('--theme-color' , e.target.dataset.color)
    })
})

// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project