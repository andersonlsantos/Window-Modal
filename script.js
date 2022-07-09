'use strict';

const sellAll = idClass => document.querySelectorAll(`${idClass}`)

const sell = idClass => document.querySelector(`${idClass}`)

function hidden(add){
    for(let cont = 0; cont < sellAll('.hidden').length; cont++){
        sellAll('.hidden')[cont].style.display = add
    }
}

const controlClick = () => hidden('block')

const controlClick2 = () => hidden('none')

const controlClick3 = () => hidden('none')

// document.onkeydown = e => {
//     if(e.key === 'Escape') hidden('none')
// } 

// keyup - lift finger of
// keypress - keep finger
// keydown - soon press down the key

document.addEventListener('keydown', e => {
    if(e.key === 'Escape') hidden('none')
})

for(let cont = 0; cont < sellAll('.show-modal').length; cont++){
    sellAll('.show-modal')[cont].addEventListener('click', controlClick)
}

sell('.close-modal').addEventListener('click', controlClick2)

sell('.hidden').addEventListener('mouseleave', controlClick3)
