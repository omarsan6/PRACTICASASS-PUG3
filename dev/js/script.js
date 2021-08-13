const d = document

d.addEventListener('DOMContentLoaded',(e)=>{
    menu('.boton__enlace-pagina','.aside','.aside__link')
    movimientoScroll('.section','.header__title','.aside__container')
})

const movimientoScroll = (sec,head,asi)=>{
    d.addEventListener('scroll',e=>{
       const $h = d.querySelector(sec)
        let s = $h.getBoundingClientRect().bottom

        if(s<700){
            d.querySelector(head).classList.add('transparent')
            d.querySelector(asi).classList.add('transparent')
        } else{
            d.querySelector(head).classList.remove('transparent')
            d.querySelector(asi).classList.remove('transparent')
        }
    })
}

const menu = (btn,aside,enlace) =>{
    d.addEventListener('click',(e)=>{
        if(e.target.matches(btn)){
            d.querySelector(aside).classList.toggle('hidden')
        }
        if(e.target.matches(enlace)){
            d.querySelector(aside).classList.remove('hidden')
        }
    })
}
