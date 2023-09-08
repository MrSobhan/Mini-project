const $ = document
const inputElem = $.querySelector('#password')
const warningBOX = $.querySelector('#warning')

inputElem.addEventListener('keydown' , (e)=>{
    if(e.getModifierState("CapsLock")){
        warningBOX.style.cssText= "display: block"
    }else{
        warningBOX.style.cssText= "display: none"

    }
})

// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project