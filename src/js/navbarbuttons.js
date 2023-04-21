const navButton = document.getElementById('navButton');
const navExtrasHome = document.getElementById('navExtrasHome');
let navMenuOpen = false;

/*navButton.addEventListener('mouseenter', () => {
    console.log('sapo')}
    )

navButton.addEventListener('mouseleave', () => {
        console.log('sapo')}
        )*/
navButton.addEventListener('mouseenter', () => {
    navExtrasHome.hidden = false}    )
        
navButton.addEventListener('mouseleave', () => {
    navExtrasHome.hidden = true})   