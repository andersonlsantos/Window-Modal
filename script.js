'use strict';

const sellAll = idClass => document.querySelectorAll(`${idClass}`)

const sell = idClass => document.querySelector(`${idClass}`)

function hidden(){
    for(let cont = 0; cont < sellAll('.hidden').length; cont++){
        sellAll('.hidden')[cont].style.display = 'block'
    }
}

const controlClick = () => {
    hidden()
}

const controlClick2 = () => {
    hidden()
}

for(let cont = 0; cont < sellAll('.show-modal').length; cont++){
    sellAll('.show-modal')[cont].addEventListener('click', controlClick)
}

sell('close-modal').addEventListener('click', controlClick2)