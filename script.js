'use strict';

const sellAll = idClass => document.querySelectorAll(`${idClass}`)

const controlClick = () => {
    
}

for(let cont = 0; cont < sellAll('.show-modal').length; cont++){
    sellAll('.show-modal')[cont].addEventListener('click', controlClick)
}