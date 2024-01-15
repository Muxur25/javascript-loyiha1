'use strict'

const onaDivi = document.querySelector('.tabheader__items'),
    bolalari = document.querySelectorAll('.tabheader__item'),
    bolaManba = document.querySelectorAll('.tabcontent'),
    position = document.querySelector('.loader')



setTimeout(() => {
    position.style.opacity = 0
    setTimeout(() => {
        position.style.display = 'none'
    }, 500) // yarim sekunddan keyin polniy animasiya yoqolsin
}, 2000) // 2 sekunddan keyin och









function yoqotibTurish(){
    bolaManba.forEach((item) => {
        item.style.display = 'none'
    })
    bolalari.forEach((item) =>{
        item.classList.remove('tabheader__item_active')
    })
}

function bittasiniKorsat(i){
    bolaManba[i].style.display = 'block'
    bolalari[i].classList.add('tabheader__item_active')
}

yoqotibTurish()
bittasiniKorsat(2)




onaDivi.addEventListener('click', (malumot) =>{
    const evev = malumot.target
    if (evev && evev.classList.contains('tabheader__item')){
        bolalari.forEach((item, indx) =>{
            if (evev == item){
                yoqotibTurish()
                bittasiniKorsat(indx)
            }
        })
    }
})





