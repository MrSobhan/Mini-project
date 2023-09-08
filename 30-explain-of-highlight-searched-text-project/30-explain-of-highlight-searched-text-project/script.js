const $ = document

const inputElem = $.querySelector('#text-to-search')
let textElem = $.querySelector('#paragraph').innerHTML
const btn = $.querySelector('.wrapper button')


btn.addEventListener('click' , ()=>{
    let text = inputElem.value
    let regex = new RegExp(`${text}` , 'g')


    if(regex.test(textElem)){
        let replace = textElem.replace(regex , (item)=> `<mark>${item}</mark>`)
        $.querySelector('#paragraph').innerHTML  = replace
        inputElem.value = ''
    }else{
        alert("Not Founded :( ")
    }

    
})

// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project