const $ = document

window.addEventListener('click' , (e)=>{
    let span = $.createElement('span')
    span.classList.add('snowflake')

    span.style.top = e.clientY + "px"
    span.style.left = e.clientX + "px"

    let numRandom = Math.floor(Math.random() * 300)

    span.style.width = numRandom + "px"
    span.style.height = numRandom + "px"

    
    $.body.append(span)
})

// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project