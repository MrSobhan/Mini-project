const $ = document

const btns = $.querySelectorAll('.tab-button')

btns.forEach(btn =>{
    btn.addEventListener('click' , (e)=>{
        let Id = e.target.dataset.id


        $.querySelector('.buttonWrapper .active').classList.remove('active')
        e.target.classList.add('active')


        $.getElementById(`${Id}`).classList.add('active')
        $.querySelector('.contentWrapper .active').classList.remove('active')


        // console.log($.querySelector('.active'));
    })
})
// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project