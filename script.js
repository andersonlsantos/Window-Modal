'use strict';

const sellAll = idClass => document.querySelectorAll(`${idClass}`)

const sell = idClass => document.querySelector(`${idClass}`)

function hidden(add){
    for(let cont = 0; cont < sellAll('.hidden').length; cont++){
        sellAll('.hidden')[cont].style.display = add
    }
}

const controlClick = () => {
    hidden('block')
}

const controlClick2 = () => {
    hidden('none')
}

for(let cont = 0; cont < sellAll('.show-modal').length; cont++){
    sellAll('.show-modal')[cont].addEventListener('click', controlClick)
}

sell('.close-modal').addEventListener('click', controlClick2)
