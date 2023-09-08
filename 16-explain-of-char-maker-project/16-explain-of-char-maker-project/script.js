let bodyColors = [
  "#a8d530",
  "#42aaff",
  "#f3d55b",
  "#ff4f51",
  "#904ae8",
  "#ffa711",
];
const $ = document

const face_btn = $.querySelector('#face-btn')
const color_btn = $.querySelector('#color-btn')
const horns_btn = $.querySelector('#horns-btn')
const tail_btn = $.querySelector('#tail-btn')

let face_btn_count = 0
let color_btn_count = 0
let horns_btn_count = 0
let tail_btn_count = 0

face_btn.addEventListener('click' , ()=>{
    face_btn_count++
    if(face_btn_count > 5){
        face_btn_count = 0
    }

    let img = $.querySelector('#face')
    img.src = `face-${face_btn_count}.png`
})
color_btn.addEventListener('click' , ()=>{
    color_btn_count++
    if(color_btn_count > 5){
        color_btn_count = 0
    }

    $.documentElement.style.setProperty('--color-character' , bodyColors[color_btn_count])
})
horns_btn.addEventListener('click' , ()=>{
    horns_btn_count++
    if(horns_btn_count > 6){
        horns_btn_count = 0
    }

    let textColorHorns = null
    
    if(horns_btn_count == 6){
        textColorHorns = 'transparent'
    }else{
        textColorHorns = bodyColors[horns_btn_count]
    }
    $.documentElement.style.setProperty('--color-horns' , textColorHorns)

})
tail_btn.addEventListener('click' , ()=>{
    tail_btn_count++
    if(tail_btn_count > 6){
        tail_btn_count = 0
    }

    let textColor = null

    if(tail_btn_count == 6){
        textColor = 'transparent'
    }else{
        textColor = bodyColors[tail_btn_count]
    }
    $.documentElement.style.setProperty('--color-tail' , textColor)

})

// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project