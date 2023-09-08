const $ = document

const pass = $.querySelector('.pass')

window.addEventListener('blur' , ()=>{
    $.title = "Faild You :(("
    pass.innerHTML = "(faild)"
    pass.classList.remove('pass')
    pass.classList.add('faild')
})

// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project