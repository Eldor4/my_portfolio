const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const navLink = document.querySelector('.linka')

//normaly close
let menuOpen= false

const toggleMenue=()=>{
    if(!menuOpen){

        console.log('object')
        menuBtn.classList.add('close')
        menu.classList.add('show')
        menuOpen=true
    }else{
        menuBtn.classList.remove('close')
        menu.classList.remove('show')
        menuOpen=false

    }
}
const clickLink=()=>{
    if(menuOpen){
    menuBtn.classList.remove('close')
        menu.classList.remove('show')
        console.log('hh')
    }
}

menuBtn.addEventListener('click', toggleMenue);
navLink.addEventListener('click',clickLink)