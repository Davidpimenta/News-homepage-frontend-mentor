var menu_button = document.getElementById('menu-button')

var container = document.getElementById('container')

var menu = document.getElementById('menu')

var shadow = document.getElementById('shadow')

menu_button.addEventListener('click', function openmenu(){
    container.style.display = 'grid'
    menu.style.animation = 'menuopen 0.5s ease-in-out'

    shadow.style.animation = 'shadowopen 0.5s ease-in-out'
})

var button_menu_close = document.getElementById('button-menu-close')

button_menu_close.addEventListener('click', function closemenu(){

    menu.style.animation = 'menuclose 0.5s ease-in-out'

    shadow.style.animation = 'shadowclose 0.5s ease-in-out'

    setTimeout(function(){
        container.style.display = 'none'
    },400) 
})