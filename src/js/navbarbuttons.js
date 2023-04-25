const navButton = document.getElementById('navButton');
const navExtrasHome = document.getElementById('navExtrasHome');



let navMenuisOpen = false;
let navMenuOnOver = false;



const showMenu = () => {
    if(!navMenuisOpen) {
        navMenuisOpen.hidden = false
        navExtrasHome.hiden = true
    }
}

const closeMenu = () => {
    setTimeout(() => {
        if(navMenuisOpen && !navMenuOnOver){
            navExtrasHome.hidden = true
            navMenuisOpen = false
        }
    }, 1000);
}

const StayMenu = () =>{

    if(navMenuisOpen){
        navExtrasHome.hidden = false
        navMenuOnOver = true
    }
}

const leaveMenu = () => {
    navMenuOnOver = false
    setTimeout(() => {
        if(navMenuisOpen){
            navExtrasHome.hidden = true
            navMenuisOpen = false}
    }, 1000);
}


navButton.addEventListener('mouseenter', () => {
    navExtrasHome.hidden = false})
        
navButton.addEventListener('mouseleave', () => {
    setTimeout(() =>   { 
    navExtrasHome.hidden = true}, 1000 );})  
    
navButton.addEventListener('mouseenter', showMenu)
navButton.addEventListener('mouseleave', closeMenu)
navExtrasHome.addEventListener('mouseenter', StayMenu)
navExtrasHome.addEventListener('mouseleave', leaveMenu)

/*primero agrego las funciones ya que JAVASCRIPT al igual que CSS lee todo de arroiba para abajo y despues si se ejcuta*/